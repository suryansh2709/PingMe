import {Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
const RenderChatCard = ({displayImage, fName, lName, id, isActive}) => {
  const navigation = useNavigation();
  const [lastMessage, setLastMessage] = useState('');
  const onCardPress = () => {
    navigation.navigate('ChatRoom', {
      id,
      fName,
      lName,
      displayImage,
      handleLastMessage,
      isActive,
    });
  };
  const handleLastMessage = last => {
    setLastMessage(last);
  };

  return (
    <>
      <TouchableOpacity onPress={onCardPress} style={styles.homeChatMainView}>
        <View style={styles.chatUserImage}>
          <Image source={{uri: displayImage}} style={styles.chatUserImage} />
        </View>
        <View style={styles.nameView}>
          <Text style={styles.userName}>{fName}</Text>
          <Text style={styles.userChatMessage}>{lastMessage}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default RenderChatCard;
