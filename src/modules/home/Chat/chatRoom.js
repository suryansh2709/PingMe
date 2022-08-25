import React, {useState, useCallback, useLayoutEffect} from 'react';
import {Image, View} from 'react-native';
import {Bubble, GiftedChat, InputToolbar, Send} from 'react-native-gifted-chat';
import {useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import {useRoute} from '@react-navigation/native';
import {styles} from './style';
import {string} from '../../../utils/strings';
import localImages from '../../../utils/localImages';
import {addMessagges} from '../../../utils/commonFunctions';

import {getStatusBarHeight} from 'react-native-status-bar-height';
import ChatHeader from './chatHeader';

export function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const {loggedInUser} = useSelector(store => store.userDataReducer);
  const {id, fName, isActive, displayImage} = useRoute().params;
  const docId =
    loggedInUser?.uid > id
      ? loggedInUser?.uid + '-' + id
      : id + '-' + loggedInUser?.uid;

  useLayoutEffect(() => {
    const subscribe = firestore()
      .collection(string.homeChatRoom)
      .doc(docId)
      .collection(string.messages)
      .onSnapshot(doc => {
        const dataArray = doc?._docs.map(element => element._data);
        dataArray.sort((a, b) => b.createdAt - a.createdAt);
        setMessages(dataArray);
      });
    return subscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSend = useCallback((message = []) => {
    const msg = message[0];
    const myMsg = {
      ...msg,
      sentBy: loggedInUser?.uid,
      sentTo: id,
    };
    setMessages(previousMessages => GiftedChat.append(previousMessages, myMsg));
    addMessagges(docId, myMsg);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderSend = props => {
    return (
      <Send {...props}>
        <View style={styles.chatSend}>
          <Image source={localImages.sendButton} style={styles.sendButton} />
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
    <View style={styles.giftedChatMainView}>
      <ChatHeader
        fName={fName}
        isActive={isActive}
        displayImage={displayImage}
      />
      <GiftedChat
        messagesContainerStyle={[
          styles.messageContainerView,
          {paddingTop: getStatusBarHeight()},
        ]}
        showAvatarForEveryMessage={true}
        renderSend={renderSend}
        renderBubble={renderBubble}
        messages={messages}
        onSend={message => onSend(message)}
        user={{
          _id: loggedInUser?.uid,
          avatar: 'https://placeimg.com/140/140/any',
        }}
        isTyping={true}
        isKeyboardInternallyHandled={true}
        renderInputToolbar={renderInputToolbar}
      />
    </View>
  );
}
