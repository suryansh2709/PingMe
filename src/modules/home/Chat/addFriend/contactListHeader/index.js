import React from 'react';
import {styles} from './style';
import {string} from '../../../../../utils/strings';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {Text, Image, TouchableOpacity} from 'react-native';
import localImages from '../../../../../utils/localImages';

export default function ContactHeader({fName, isActive, displayImage}) {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={['#56CF83', '#50BD87', '#47AD8B']}
      style={styles.headerMainView}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Image source={localImages.left} style={styles.leftImageStyle} />
      </TouchableOpacity>
      <Text style={styles.contactText}>{string.contactList}</Text>
    </LinearGradient>
  );
}
