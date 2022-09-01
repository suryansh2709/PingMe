import React from 'react';
import {styles} from './style';
import {string} from '../../../utils/strings';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import {Text, View, TouchableOpacity} from 'react-native';
const RenderChatCard = ({
  displayImage,
  fName,
  lName,
  id,
  isActive,
  lastMessage,
}) => {
  const navigation = useNavigation();

  const onCardPress = () => {
    navigation.navigate(string.chatRoom, {
      id,
      fName,
      lName,
      lastMessage,
      displayImage,
      isActive,
    });
  };

  return (
    <TouchableOpacity onPress={onCardPress} style={styles.homeChatMainView}>
      <View style={styles.chatUserImage}>
        <FastImage source={{uri: displayImage}} style={styles.chatUserImage} />
      </View>
      <View style={styles.nameView}>
        <Text style={styles.userName}>{fName}</Text>
        <Text numberOfLines={1} style={styles.userChatMessage}>
          {lastMessage.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default RenderChatCard;
