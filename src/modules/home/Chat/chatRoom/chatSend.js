import React from 'react';
import {styles} from '../style';
import {Image, View} from 'react-native';
import {Send} from 'react-native-gifted-chat';
import localImages from '../../../../utils/localImages';

const RenderSend = props => {
  return (
    <Send {...props}>
      <View style={styles.chatSend}>
        <Image source={localImages.sendButton} style={styles.sendButton} />
      </View>
    </Send>
  );
};

export default RenderSend;
