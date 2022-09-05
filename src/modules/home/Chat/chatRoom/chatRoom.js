import {styles} from './style';
import RenderSend from './chatSend';
import ChatHeader from '../chatHeader';
import RenderBubble from './chatBubble';
import {useDispatch, useSelector} from 'react-redux';
import {
  debounce,
  setInbox,
  updateChat,
  updateInbox,
  addMessagges,
  getTypingStatusFromFireBase,
  saveTypingStatusOnFireStore,
} from '../../../../utils/commonFunctions';
import {string} from '../../../../utils/strings';
import {View, Platform, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import Tooltip from 'react-native-walkthrough-tooltip';
import Clipboard from '@react-native-clipboard/clipboard';
import {normalize, vh} from '../../../../utils/dimensions';
import {createRoom, handleClearChat} from './utils/chatUtils';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {GiftedChat, InputToolbar} from 'react-native-gifted-chat';
import React, {useState, useCallback, useLayoutEffect, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';

function ChatRoom() {
  const [showTip, setTip] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const {id, fName, isActive, displayImage} = useRoute().params;
  const [getTypingStatus, setGetTypingStatus] = useState(false);
  const {loggedInUser} = useSelector(store => store.userDataReducer);
  const [senderBlock, setSenderBlock] = useState(false);
  const [recieverBlock, setRecieverBlock] = useState(false);
  const docId =
    loggedInUser?.uid > id
      ? loggedInUser?.uid + '-' + id
      : id + '-' + loggedInUser?.uid;
  const {blockList} = useSelector(store => store.userDataReducer);

  useLayoutEffect(() => {
    createRoom(docId, loggedInUser, msgs => {
      setMessages(msgs);
    });
    firestore()
      .collection('Users')
      .doc(id)
      .collection('BlockList')
      .onSnapshot(doc => {
        const list = doc._docs.map(ele => ele.data());
        list?.forEach(element => {
          if (element?.id === loggedInUser?.uid) {
            setRecieverBlock(true);
          }
        });
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    blockList?.forEach(ele => {
      if (ele?.id === id) {
        setSenderBlock(true);
      }
    });
  }, []);
  useEffect(() => {
    saveTypingStatusOnFireStore(docId, loggedInUser?.uid, {typing: isTyping});
    getTypingStatusFromFireBase(docId, id, typing => {
      setGetTypingStatus(typing?.typing);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTyping]);

  const deletForMe = msg => {
    updateChat(
      docId,
      msg?._id,
      {...msg, deletedBy: loggedInUser?.uid},
      () => {
        if (messages[0]?._id === msg?._id) {
          updateInbox(loggedInUser?.uid, id, {
            lastMessage: messages[1],
            isActive,
          });
        }
      },
      () => {},
    );
  };

  const deletedForEveryOne = msg => {
    updateChat(
      docId,
      msg?._id,
      {...msg, deletedForEveryOne: true},
      () => {
        if (messages[0]?._id === msg?._id) {
          updateInbox(loggedInUser?.uid, id, {
            lastMessage: messages[1],
            isActive,
          });
        }
      },
      () => {},
    );
  };

  const handleLongPress = (context, message) => {
    let options, cancelButtonIndex;
    if (message.sentBy === loggedInUser?.uid) {
      options = ['Copy', 'Delete for me', 'Delete for everyone', 'Cancel'];
      cancelButtonIndex = options.length;
      context
        .actionSheet()
        .showActionSheetWithOptions(
          {options, cancelButtonIndex},
          buttonIndex => {
            switch (buttonIndex) {
              case 0:
                Clipboard.setString(message.text);
                break;
              case 1:
                deletForMe(message);
                break;
              case 2:
                deletedForEveryOne(message);
                break;
            }
          },
        );
    } else {
      options = ['Copy', 'Delete for me', 'Cancel'];
      cancelButtonIndex = options.length;
      context
        .actionSheet()
        .showActionSheetWithOptions(
          {options, cancelButtonIndex},
          buttonIndex => {
            switch (buttonIndex) {
              case 0:
                Clipboard.setString(message.text);
                break;
              case 1:
                deletForMe(message);
                break;
            }
          },
        );
    }
  };

  const handleBlock = () => {
    firestore()
      .collection('Users')
      .doc(loggedInUser?.uid)
      .collection('BlockList')
      .doc(id)
      .set({name: fName, id: id});
    setTip(!showTip);
    setSenderBlock(true);
  };

  const onSend = useCallback((message = []) => {
    const msg = message[0];
    const myMsg = {
      ...msg,
      sentBy: loggedInUser?.uid,
      sentTo: id,
      deletedBy: '',
      sent: true,
      received: false,
      deletedForEveryOne: false,
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
    if (senderBlock) {
      return (
        <Text
          style={styles.unblock}
          onPress={() => {
            firestore()
              .collection('Users')
              .doc(loggedInUser?.uid)
              .collection('BlockList')
              .doc(id)
              .delete()
              .then(() => {
                setRecieverBlock(false);
                setSenderBlock(false);
              });
          }}>
          {'Unblock'}
        </Text>
      );
    } else if (recieverBlock) {
      return (
        <Text style={styles.toolTipTextStyle}>
          {'You cannot reply to this conversation anymore'}
        </Text>
      );
    } else {
      return (
        <InputToolbar containerStyle={styles.chatInputViewStyle} {...props} />
      );
    }
  };

  const startTyping = debounce(arg => {
    setIsTyping(arg);
  }, 1000);

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
        toolTip={toolTip}
        displayImage={displayImage}
      />
      <Tooltip
        topAdjustment={Platform.OS === 'android' ? getStatusBarHeight() : 0}
        backgroundColor="transparent"
        placement="top"
        contentStyle={styles.toolTipContainer}
        isVisible={showTip}
        content={
          <View style={styles.tooTipContentMainView}>
            <Text style={styles.toolTipTextStyle} onPress={handleBlock}>
              {string.blockUser}
            </Text>
            <View style={styles.contentLineSeperator} />
            <Text onPress={handleClearChat} style={styles.toolTipTextStyle}>
              {string.clearChat}
            </Text>
          </View>
        }
        onClose={() => setTip(!showTip)}
      />
      <GiftedChat
        messagesContainerStyle={[
          styles.messageContainerView,
          {
            top: getStatusBarHeight() + normalize(25),
            paddingBottom: vh(80),
          },
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
        onLongPress={handleLongPress}
        onInputTextChanged={detectTyping}
      />
    </View>
  );
}
export default React.memo(ChatRoom);
