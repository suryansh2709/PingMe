import React, {useState, useCallback, useLayoutEffect, useEffect} from 'react';
import {View, Platform, Text} from 'react-native';
import {GiftedChat, InputToolbar, StatusBar} from 'react-native-gifted-chat';
import {useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import {useRoute} from '@react-navigation/native';
import {string} from '../../../../utils/strings';
import {
  addMessagges,
  getTypingStatusFromFireBase,
  saveTypingStatusOnFireStore,
  setInbox,
  updateInbox,
} from '../../../../utils/commonFunctions';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import ChatHeader from '../chatHeader';
import RenderBubble from './chatBubble';
import RenderSend from './chatSend';
import Tooltip from 'react-native-walkthrough-tooltip';
import {styles} from './style';

export function ChatRoom() {
  const [showTip, setTip] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [getTypingStatus, setGetTypingStatus] = useState(false);
  const {loggedInUser} = useSelector(store => store.userDataReducer);
  const {id, fName, isActive, displayImage} = useRoute().params;
  console.log(id, fName, isActive, displayImage, 'checking');
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

  const debounce = useCallback((fun, timeout) => {
    let timer;
    return args => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fun(false);
      }, timeout);
      fun(true);
    };
  }, []);

  const onSend = useCallback((message = []) => {
    const msg = message[0];
    const myMsg = {
      ...msg,
      sentBy: loggedInUser?.uid,
      sentTo: id,
    };
    if (messages.length === 0) {
      let param_1 = {fName, displayImage, id, lastMessage: myMsg, isActive};
      let param_2 = {
        fName: loggedInUser?.fName,
        displayImage: loggedInUser?.displayImage,
        id: loggedInUser?.uid,
        lastMessage: myMsg,
        isActive: isActive,
      };
      setInbox(loggedInUser?.uid, id, param_1);
      setInbox(id, loggedInUser?.uid, param_2);
    } else {
      updateInbox(loggedInUser?.uid, id, {lastMessage: myMsg, isActive});
    }
    setMessages(previousMessages => GiftedChat.append(previousMessages, myMsg));
    addMessagges(docId, myMsg);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderInputToolbar = props => {
    return (
      <InputToolbar containerStyle={styles.chatInputViewStyle} {...props} />
    );
  };

  useEffect(() => {
    saveTypingStatusOnFireStore(docId, loggedInUser?.uid, {typing: isTyping});
    getTypingStatusFromFireBase(docId, id, typing => {
      setGetTypingStatus(typing?.typing);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTyping]);

  const startTyping = debounce(arg => {
    setIsTyping(arg);
  }, 2000);

  const detectTyping = text => {
    if (text.length > 0) {
      startTyping();
    }
  };

  const toolTip = () => {
    setTip(!showTip);
  };

  return (
    <View style={styles.giftedChatMainView}>
      <ChatHeader
        id={id}
        fName={fName}
        displayImage={displayImage}
        toolTip={toolTip}
      />
      <Tooltip
        topAdjustment={Platform.OS === 'android' ? -StatusBar.currentHeight : 0}
        backgroundColor="transparent"
        placement="right"
        contentStyle={styles.toolTipContainer}
        isVisible={showTip}
        content={
          <View style={styles.tooTipContentMainView}>
            <Text style={styles.toolTipTextStyle} onPress={{}}>
              {string.blockUser}
            </Text>
            <View style={styles.contentLineSeperator} />
            <Text onPress={{}} style={styles.toolTipTextStyle}>
              {string.clearChat}
            </Text>
          </View>
        }
        onClose={() => setTip(!showTip)}
      />
      <GiftedChat
        messagesContainerStyle={[
          styles.messageContainerView,
          {paddingTop: getStatusBarHeight()},
        ]}
        showAvatarForEveryMessage={true}
        renderSend={RenderSend}
        renderBubble={RenderBubble}
        messages={messages}
        onSend={message => onSend(message)}
        user={{
          _id: loggedInUser?.uid,
          avatar: loggedInUser?.displayImage,
        }}
        isTyping={getTypingStatus}
        isKeyboardInternallyHandled={true}
        renderInputToolbar={renderInputToolbar}
        onInputTextChanged={detectTyping}
      />
    </View>
  );
}
