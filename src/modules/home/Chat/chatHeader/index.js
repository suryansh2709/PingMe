import {Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import localImages from '../../../../utils/localImages';
import {styles} from './style';
import {vh, vw} from '../../../../utils/dimensions';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

export default function ChatHeader({fName, isActive, displayImage}) {
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
          <Image
            source={localImages.left}
            style={{height: vh(22), width: vh(22), marginLeft: vw(14)}}
          />
        </TouchableOpacity>
        <Image source={{uri: displayImage}} style={styles.userProfile} />
        <View style={styles.activeNameView}>
          <Text style={styles.nameText}>{fName}</Text>
          {isActive ? (
            <Text style={styles.activeText}>{'Active Now'}</Text>
          ) : null}
        </View>
      </View>
      <View style={styles.iconImageView}>
        <TouchableOpacity>
          <Image
            source={localImages.audioIcon}
            style={styles.headerIconImage}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={localImages.videoIcon}
            style={styles.headerVideoIconImage}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={localImages.homeMenuIcon}
            style={styles.headerIconImage}
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
