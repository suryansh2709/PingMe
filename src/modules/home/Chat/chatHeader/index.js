import {styles} from './style';
import FastImage from 'react-native-fast-image';
import {string} from '../../../../utils/strings';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import localImages from '../../../../utils/localImages';
import firestore from '@react-native-firebase/firestore';
import LinearGradient from 'react-native-linear-gradient';
import IconButton from '../../../../components/iconButtons';
import {Text, View, Image, TouchableOpacity} from 'react-native';

export default function ChatHeader({fName, id, displayImage, toolTip}) {
  const [isActive, setisActive] = useState(false);
  useEffect(() => {
    const activeUserListener = firestore()
      .collection('Users')
      .doc(id)
      .onSnapshot(documentSnapshot => {
        setisActive(documentSnapshot?.data()?.isActive);
      });
    return activeUserListener;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const navigation = useNavigation();
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#56CF83', '#50BD87', '#47AD8B']}
      style={styles.headerView}>
      <View style={styles.nameMainView}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={localImages.left} style={styles.leftImageStyle} />
        </TouchableOpacity>
        <FastImage source={{uri: displayImage}} style={styles.userProfile} />
        <View style={styles.activeNameView}>
          <Text style={styles.nameText}>{fName}</Text>
          {isActive ? (
            <Text style={styles.activeText}>{string.activeNow}</Text>
          ) : null}
        </View>
      </View>
      <View style={styles.iconImageView}>
        <IconButton
          onPress={() => {}}
          image={localImages.audioIcon}
          imageStyle={styles.headerIconImage}
        />
        <IconButton
          onPress={() => {}}
          image={localImages.videoIcon}
          imageStyle={styles.headerVideoIconImage}
        />
        <IconButton
          onPress={toolTip}
          image={localImages.homeMenuIcon}
          imageStyle={styles.headerIconImage}
        />
      </View>
    </LinearGradient>
  );
}
