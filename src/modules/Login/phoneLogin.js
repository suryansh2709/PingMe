import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Header from '../../components/commonHeader';
import {normalize} from '../../utils/dimensions';
import {color} from '../../utils/colors';
import CustomTextInput from '../../components/customTextInput/customTextInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {string} from '../../utils/strings';
import CountryCodeModal from '../../components/countryCodeModal';

export default function PhoneLogin() {
  return (
    <KeyboardAwareScrollView
      style={styles.mainView}
      bounces={false}
      scrollEnabled={false}>
      <Header />
      <View style={styles.emailTextView}>
        <Text style={styles.enterEmailText}>{string.enterEmail}</Text>
        <Text style={styles.confirmPhoneText}>{string.confirmCountryCode}</Text>
      </View>
      <Text style={styles.recommendText}>{string.recommend}</Text>
      <View style={styles.countryCodeView}>
        <View style={styles.countryCodeViewStyle}></View>
        <CustomTextInput width={245} />
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  emailTextView: {
    height: normalize(86),
    marginHorizontal: normalize(40),
    marginTop: normalize(79),
    justifyContent: 'center',
  },
  enterEmailText: {
    fontSize: normalize(19),
    fontWeight: '500',
    textAlign: 'center',
  },
  confirmPhoneText: {
    fontSize: normalize(14),
    marginTop: normalize(8),
    lineHeight: normalize(22),
    color: '#0F1828',
    textAlign: 'center',
    fontWeight: '300',
  },
  recommendText: {
    marginTop: normalize(44),
    marginLeft: normalize(27),
    fontSize: normalize(14),
    color: color.blue,
  },
  countryCodeView: {
    height: normalize(36),
    marginHorizontal: normalize(24),
    marginTop: normalize(14),
    flexDirection: 'row',
  },
  countryCodeViewStyle: {
    width: normalize(74),
    backgroundColor: '#f7f7fc',
    borderRadius: 4,
    flexDirection: 'row',
  },
  mainView: {
    backgroundColor: color.white,
  },
});
