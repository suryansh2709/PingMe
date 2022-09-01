import React from 'react';
import {color} from '../../../../utils/colors';
import {Bubble} from 'react-native-gifted-chat';

const renderBubble = props => {
  return (
    <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: color.chatSender,
        },
        left: {
          backgroundColor: color.chatReciever,
        },
      }}
    />
  );
};
export default renderBubble;
