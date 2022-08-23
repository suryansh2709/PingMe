import React, {useState, useCallback, useLayoutEffect} from 'react';
import {Image, View} from 'react-native';
import {Bubble, GiftedChat, InputToolbar, Send} from 'react-native-gifted-chat';
import {useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import {useRoute} from '@react-navigation/native';
import {styles} from './style';
import {string} from '../../../utils/strings';
import ChatHeader from './chatHeader';
import {color} from '../../../utils/colors';

export function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const {loggedInUser} = useSelector(store => store.userDataReducer);
  const {id} = useRoute().params;
  const docId =
    loggedInUser?._user?.uid > id
      ? loggedInUser?._user?.uid + '-' + id
      : id + '-' + loggedInUser?._user?.uid;

  useLayoutEffect(() => {
    const subscribe = firestore()
      .collection(string.homeChatRoom)
      .doc(docId)
      .collection(string.messages)
      .onSnapshot(doc => {
        const dataArray = doc._docs.map(element => element._data);
        dataArray.sort((a, b) => b.createdAt - a.createdAt);
        setMessages(dataArray);
      });

    return subscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log('pure', messages);

  const onSend = useCallback((message = []) => {
    console.log('messages', message);
    const msg = message[0];
    const myMsg = {
      ...msg,
      sentBy: loggedInUser?._user?.uid,
      sentTo: id,
    };
    setMessages(previousMessages => GiftedChat.append(previousMessages, myMsg));
    firestore()
      .collection(string.homeChatRoom)
      .doc(docId)
      .collection(string.messages)
      .add({...myMsg, createdAt: new Date().getTime()});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderSend = props => {
    return (
      <Send {...props}>
        <View style={styles.chatSend}>
          <Image
            source={require('../../../assets/images/send.png')}
            style={styles.sendImage}
          />
        </View>
      </Send>
    );
  };

  const renderInputToolbar = props => {
    return (
      <InputToolbar containerStyle={styles.chatInputViewStyle} {...props} />
    );
  };

  const renderBubble = props => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#4FBC87',
          },
          left: {
            backgroundColor: '#EFEEF4',
          },
        }}
      />
    );
  };

  return (
    <>
      <View style={styles.giftedChatMainView}>
        <GiftedChat
          messagesContainerStyle={styles.messageContainerView}
          showAvatarForEveryMessage={true}
          renderSend={renderSend}
          renderBubble={renderBubble}
          messages={messages}
          onSend={message => onSend(message)}
          user={{
            _id: loggedInUser?._user?.uid,
            avatar: 'https://placeimg.com/140/140/any',
          }}
          isTyping={true}
          isKeyboardInternallyHandled={true}
          renderInputToolbar={renderInputToolbar}
        />
      </View>
    </>
  );
}
