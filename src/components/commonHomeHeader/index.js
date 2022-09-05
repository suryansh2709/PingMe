import {View, Text} from 'react-native';
import React from 'react';
import {vh, vw} from '../../utils/dimensions';
import localImages from '../../utils/localImages';
import {color} from '../../utils/colors';
import LinearGradient from 'react-native-linear-gradient';
import IconButton from '../iconButtons';
import {string} from '../../utils/strings';
import {styles} from './style';

function HomeHeader({toolTip, addFriend, onsearchPress}) {
  return (
    <LinearGradient
      colors={['#56CF83', '#50BD87', '#47AD8B']}
      style={styles.headerMainView}>
      <Text style={{fontSize: vh(34), marginLeft: vw(10), color: color.white}}>
        {string.headerPingMe}
      </Text>
      <View style={styles.iconImageView}>
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
export default React.memo(HomeHeader);
