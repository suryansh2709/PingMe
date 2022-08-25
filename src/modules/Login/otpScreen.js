import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/commonHeader';
import {string} from '../../utils/strings';
import {styles} from './style';
import OtpComponent from '../../components/OtpComponent';
import {useNavigation, useRoute} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Loader from '../../components/loader';
import HeadingView from './headingView';

export default function OtpScreen() {
  const navigation = useNavigation();
  const [code, setCode] = useState();
  const {confirm, number} = useRoute().params;
  const [loader, setLoader] = useState(false);

  const handleLoader = loaderBack => {
    setLoader(loaderBack);
  };

  const handleCodeChange = otp => {
    setCode(otp);
  };

  return (
    <View style={styles.otpMainView}>
      <Header
        onPress={() => {
          navigation.goBack();
        }}
        backVisible={false}
      />
      <HeadingView
        bigHeader={string.enterCode}
        smallHeader={string.sentOtpTo}
      />
      <OtpComponent
        number={number}
        confirm={confirm}
        handleLoader={handleLoader}
        handleCodeChange={handleCodeChange}
      />
      <TouchableOpacity activeOpacity={0.6} style={styles.resendCodeView}>
        <Text style={styles.resendCodeText}>{string.resendCode}</Text>
      </TouchableOpacity>
      <Loader loader={loader} />
    </View>
  );
}
