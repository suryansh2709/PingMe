import {styles} from './style';
import {string} from '../../../utils/strings';
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BackgroundTimer from 'react-native-background-timer';
import {signInWirhPhoneNumber} from '../../../utils/commonFunctions';

const ResendOtp = ({handleResendConfirmation, number, selected}) => {
  const navigation = useNavigation();
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    startTimer();
    return () => {
      BackgroundTimer.stopBackgroundTimer();
    };
  }, []);

  useEffect(() => {
    if (timer <= 0) {
      BackgroundTimer.stopBackgroundTimer();
    }
  }, [timer]);

  const onResetPress = () => {
    signInWirhPhoneNumber(
      selected,
      number,
      confirmation => {
        navigation.navigate(string.otp, {
          confirm: confirmation,
          number: number,
        });
        handleResendConfirmation(confirmation);
      },
      () => {},
    );
  };

  const startTimer = () => {
    BackgroundTimer.runBackgroundTimer(() => {
      setTimer(time => {
        if (time < 1) {
          return time;
        } else {
          return time - 1;
        }
      });
    }, 1000);
  };
  return (
    <TouchableOpacity
      onPress={onResetPress}
      disabled={!timer <= 0}
      activeOpacity={0.6}
      style={styles.resendCodeView}>
      <Text style={timer <= 0 ? styles.resendCodeText : styles.inactiveReset}>
        {string.resendCode}
      </Text>
      {timer > 0 ? <Text style={styles.timer}>{timer}</Text> : null}
    </TouchableOpacity>
  );
};

export default React.memo(ResendOtp);
