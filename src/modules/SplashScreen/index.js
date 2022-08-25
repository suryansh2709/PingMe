import {Text} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {color} from '../../utils/colors';
import {useNavigation} from '@react-navigation/native';
import {string} from '../../utils/strings';
import {useSelector} from 'react-redux';

const SplashScreen = () => {
  const {loggedInUser} = useSelector(store => store.userDataReducer);
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      console.log(
        'Object.keys(loggedInUser).length',
        Object.keys(loggedInUser).length,
      );
      if (Object.keys(loggedInUser).length === 0) {
        navigation.navigate(string.loginStack);
        console.log('yahaaa');
      } else {
        navigation.navigate(string.homeStack);
        console.log('vaha');
      }
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
