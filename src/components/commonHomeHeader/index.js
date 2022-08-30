import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {vh, vw} from '../../utils/dimensions';
import localImages from '../../utils/localImages';
import {color} from '../../utils/colors';
import LinearGradient from 'react-native-linear-gradient';
import IconButton from '../iconButtons';

export default function HomeHeader({
  toolTip,
  addFriend,
  search,
  setSearch,
  onsearchPress,
}) {
  return (
    <LinearGradient
      colors={['#56CF83', '#50BD87', '#47AD8B']}
      style={styles.headerMainView}>
      <Text style={{fontSize: vh(34), marginLeft: vw(10), color: color.white}}>
        {'քɨռɢʍɛ'}
      </Text>
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

const styles = StyleSheet.create({
  headerIconImage: {
    height: vh(20),
    width: vh(20),
    tintColor: color.white,
  },
  headerMainView: {
    height: vh(83),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#50BF87',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  iconImageView: {
    flexDirection: 'row',
    width: vw(98),
    height: vh(24),
    justifyContent: 'space-around',
    marginRight: vw(13),
  },
});
