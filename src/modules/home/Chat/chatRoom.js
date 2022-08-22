import React, {useState, useCallback, useEffect, useLayoutEffect} from 'react';
import {Image, View} from 'react-native';
import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';
import {useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import {useRoute} from '@react-navigation/native';
import {styles} from './style';

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
      .collection('chatroom')
      .doc(docId)
      .collection('messages')
      .onSnapshot(doc => {
        const dataArray = doc._docs.map(element => element._data);
        dataArray.sort((a, b) => b.createdAt - a.createdAt);
        setMessages(dataArray);
      });

    return subscribe;
  }, []);
  console.log('pure', messages);

  const onSend = useCallback((messages = []) => {
    console.log('messages', messages);
    const msg = messages[0];
    const myMsg = {
      ...msg,
      sentBy: loggedInUser?._user?.uid,
      sentTo: id,
    };
    setMessages(previousMessages => GiftedChat.append(previousMessages, myMsg));

    console.log('docId', docId, myMsg, loggedInUser);

    firestore()
      .collection('chatroom')
      .doc(docId)
      .collection('messages')
      .add({...myMsg, createdAt: new Date().getTime()});
  }, []);

  const renderSend = props => {
    return (
      <Send {...props}>
        <View style={styles.chatSend}>
          <Image
            source={require('../../../assets/images/send.png')}
            style={{height: '100%', width: '100%'}}
          />
        </View>
      </Send>
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
    <GiftedChat
      renderSend={renderSend}
      renderBubble={renderBubble}
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: loggedInUser?._user?.uid,
      }}
    />
  );
}
