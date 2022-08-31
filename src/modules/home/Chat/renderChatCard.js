import {Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
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
    navigation.navigate('ChatRoom', {
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
