import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/commonHeader';
import {string} from '../../utils/strings';
import {styles} from './style';
import OtpComponent from '../../components/OtpComponent';
import {useNavigation, useRoute} from '@react-navigation/native';
import Loader from '../../components/loader';
import HeadingView from './headingView';
import ResendOtp from './ResendComponent';

export default function OtpScreen() {
  useEffect(() => {}, []);
  const navigation = useNavigation();
  const [loader, setLoader] = useState(false);
  const {confirm, number, selected} = useRoute().params;
  const [confirmation, setConfirmation] = useState(confirm);

  const handleLoader = loaderBack => {
    setLoader(loaderBack);
  };
  const handleResendConfirmation = newConfirm => {
    setConfirmation(newConfirm);
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
        confirm={confirmation}
        handleLoader={handleLoader}
      />
      <ResendOtp
        number={number}
        selected={selected}
        handleResendConfirmation={handleResendConfirmation}
      />
      <Loader loader={loader} />
    </View>
  );
}
