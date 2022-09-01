import {Animated} from 'react-native';

export const searchPress = transform => {
  Animated.timing(transform, {
    toValue: 1,
    duration: 300,
    useNativeDriver: true,
  }).start();
};

export const backPress = transform => {
  Animated.timing(transform, {
    toValue: 0,
    duration: 200,
    useNativeDriver: true,
  }).start();
};
