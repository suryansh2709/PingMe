import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { color } from '../../utils/colors';

const SplashScreen = () => {
    const colorArray = [color.darkGreen, color.lightGreen]
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={colorArray}
      style={styles.splashMain}>
      <Text>SplashScreen</Text>
    </LinearGradient>
  );
};

export default SplashScreen;
