import {styles} from './style';
import React, {useState} from 'react';
import {string} from '../../../../utils/strings';
import localImages from '../../../../utils/localImages';
import LinearGradient from 'react-native-linear-gradient';
import {View, Image, TouchableOpacity, TextInput, Animated} from 'react-native';

export default function SearchHeader({
  search,
  setSearch,
  animatedStyle,
  onBackPress,
}) {
  const transform = useState(new Animated.Value(0))[0];
  const [name, setName] = useState('');
  let scale = [
    {
      scale: transform.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      }),
    },
  ];
  return (
    <Animated.View style={[styles.headerMainView, animatedStyle]}>
      <LinearGradient
        colors={['#56CF83', '#50BD87', '#47AD8B']}
        style={styles.headerMainView}>
        <View style={styles.searchMainView}>
          <TouchableOpacity onPress={onBackPress}>
            <Image source={localImages.left} style={styles.searchLeftIcon} />
          </TouchableOpacity>
          <TextInput
            placeholder={string.search}
            value={name}
            onChangeText={text => {
              setName(text);
            }}
            style={styles.textInputStyle}
          />
        </View>
      </LinearGradient>
    </Animated.View>
  );
}
