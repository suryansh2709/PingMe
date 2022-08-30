import {Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';
import {vh, vw} from '../../../../../utils/dimensions';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {color} from '../../../../../utils/colors';
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
        <Image
          source={localImages.left}
          style={{height: vh(30), width: vh(30), tintColor: color.white}}
        />
      </TouchableOpacity>
      <Text style={{fontSize: vh(34), marginLeft: vw(10), color: color.white}}>
        {'ℭ𝔬𝔫𝔱𝔞𝔠𝔱 𝔏𝔦𝔰𝔱'}
      </Text>
    </LinearGradient>
  );
}
