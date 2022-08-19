import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {vh, vw} from '../../utils/dimensions';
import localImages from '../../utils/localImages';
import {color} from '../../utils/colors';
import LinearGradient from 'react-native-linear-gradient';

export default function HomeHeader() {
  return (
    <LinearGradient
      colors={['#56CF83', '#50BD87', '#47AD8B']}
      style={styles.headerMainView}>
      <Text style={{fontSize: vh(34), marginLeft: vw(10), color: color.white}}>
        {'քɨռɢʍɛ'}
      </Text>
      <View style={styles.iconImageView}>
        <TouchableOpacity>
          <Image
            source={localImages.homeSearchIcon}
            style={styles.headerIconImage}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={localImages.homeAddIcon}
            style={styles.headerIconImage}
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

const styles = StyleSheet.create({
  headerIconImage: {height: vh(20), width: vh(20), tintColor: color.white},
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
