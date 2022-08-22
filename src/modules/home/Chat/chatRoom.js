import React, {useState, useCallback, useEffect} from 'react';
import {Image, View} from 'react-native';
import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';

export function ChatRoom() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const renderSend = props => {
    return (
      <Send {...props}>
        <View
          style={{
            height: 30,
            width: 30,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
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
        _id: 1,
      }}
    />
  );
}
