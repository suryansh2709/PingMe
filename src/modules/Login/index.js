import {styles} from './style';
import PhoneLogin from './phoneLogin';
import React, {useEffect} from 'react';
import HeadingView from './headingView';
import {string} from '../../utils/strings';
import {Alert, BackHandler} from 'react-native';
import Header from '../../components/commonHeader';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Login = () => {
  const navigation = useNavigation();
  /**
   * Handle On hardwareBackPress of Android
   */
  useEffect(() => {
    BackHandler.addEventListener(string.hardWareBack, onBackPress);

    return () => {
      BackHandler.removeEventListener(string.hardWareBack, onBackPress);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onBackPress = () => {
    if (navigation.isFocused()) {
      Alert.alert('', string.cancel, [
        {
          text: string.cancel,
          onPress: () => null,
        },
        {text: string.yes, onPress: () => BackHandler.exitApp()},
      ]);
      //Return true for stopping default backpress
      //Return False for performing default backpress
      return true;
    }
  };

  return (
    <KeyboardAwareScrollView
      style={styles.mainView}
      bounces={false}
      scrollEnabled={false}>
      <Header
        header={string.login}
        backVisible={false}
        style={styles.headerView}
      />
      <HeadingView
        style={styles.enterPhoneTextView}
        bigHeader={string.enterEmail}
        smallHeader={string.confirmCountryCode}
      />
      <PhoneLogin />
    </KeyboardAwareScrollView>
  );
};

export default Login;
