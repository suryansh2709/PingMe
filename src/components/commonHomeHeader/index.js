import React from 'react';
import {styles} from './style';
import {View, Text} from 'react-native';
import IconButton from '../iconButtons';
import {string} from '../../utils/strings';
import localImages from '../../utils/localImages';
import LinearGradient from 'react-native-linear-gradient';

export default function HomeHeader({toolTip, addFriend, onsearchPress}) {
  return (
    <LinearGradient
      colors={['#56CF83', '#50BD87', '#47AD8B']}
      style={styles.headerMainView}>
      <Text style={styles.chatHeaderText}>{string.headerPingMe}</Text>
      <View style={styles.iconImageView}>
        <IconButton
          onPress={onsearchPress}
          imageStyle={styles.headerIconImage}
          image={localImages.homeSearchIcon}
        />
        <IconButton
          onPress={addFriend}
          image={localImages.homeAddIcon}
          imageStyle={styles.headerIconImage}
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
