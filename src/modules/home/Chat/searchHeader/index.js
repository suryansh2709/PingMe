import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Animated,
} from 'react-native';
import React, {useState} from 'react';
import {vh, vw} from '../../../../utils/dimensions';
import LinearGradient from 'react-native-linear-gradient';
import localImages from '../../../../utils/localImages';

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
            placeholder="Search"
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

const styles = StyleSheet.create({
  searchLeftIcon: {
    height: vh(25),
    width: vh(25),
    top: 2,
  },
  headerMainView: {
    height: vh(83),
    backgroundColor: '#50BF87',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
  },
  searchMainView: {
    flexDirection: 'row',
  },
  textInputStyle: {marginLeft: vw(8), width: '80%', padding: 8},
});
