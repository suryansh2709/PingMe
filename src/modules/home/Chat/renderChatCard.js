import {Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
const RenderChatCard = ({displayImage, fName, lName, id}) => {
  const navigation = useNavigation();
  console.log('displayImage', displayImage);
  const onCardPress = () => {
    navigation.navigate('ChatRoom', {id, fName});
  };

  console.log('chalaa');
  return (
    <>
      <TouchableOpacity onPress={onCardPress} style={styles.homeChatMainView}>
        <View style={styles.chatUserImage}>
          <Image source={{uri: displayImage}} style={styles.chatUserImage} />
        </View>
        <View style={styles.nameView}>
          <Text style={styles.userName}>{fName}</Text>
          <Text style={styles.userChatMessage}>{lName}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default RenderChatCard;
