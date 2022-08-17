import {Text} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {color} from '../../utils/colors';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('LoginStack');
    }, 1000);
  }, [navigation]);
  const colorArray = [color.darkGreen, color.lightGreen];
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
