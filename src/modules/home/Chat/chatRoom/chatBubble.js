import React from 'react';
import {Bubble} from 'react-native-gifted-chat';

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
export default renderBubble;
