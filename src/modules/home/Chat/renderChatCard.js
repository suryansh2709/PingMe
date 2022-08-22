import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import localImages from '../../../utils/localImages';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';

const RenderChatCard = ({displayImage, fName, lName, id}) => {
  const navigation = useNavigation();
  console.log('displayImage,fName, lName', displayImage, fName, lName);
  const onCardPress = () => {
    navigation.navigate('ChatRoom', {id, fName});
  };

  console.log('chalaa');
  return (
    <TouchableOpacity onPress={onCardPress} style={styles.homeChatMainView}>
      {displayImage ? (
        <View style={styles.chatUserImage}>
          <Image source={{uri: displayImage}} style={styles.chatUserImage} />
        </View>
      ) : (
        <View style={styles.chatUserImage}>
          <Image source={localImages.user} style={styles.chatUserImage} />
        </View>
      )}
      <View style={styles.nameView}>
        <Text style={styles.userName}>{fName}</Text>
        <Text style={styles.userChatMessage}>{lName}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RenderChatCard;
