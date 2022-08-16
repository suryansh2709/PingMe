import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/commonHeader';
import {normalize, vh, vw} from '../../utils/dimensions';
import {color} from '../../utils/colors';
import CustomTextInput from '../../components/customTextInput/customTextInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {string} from '../../utils/strings';
import CountryCodeModal from '../../components/countryCodeModal';
import {countryCodes} from '../../components/countryCodeModal/utils/phoneData';
import CustomButton from '../../components/customButton/customButton';

export default function PhoneLogin() {
  const [isVisible, setIsVisible] = useState(false);
  const [selected, setSelected] = useState(countryCodes[0].code);
  const [number, setNumber] = useState('');

  const selectionHandler = code => {
    setSelected(code);
  };

  const hanldeCountryCodeOnPress = () => {
    setIsVisible(!isVisible);
  };
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
        <TouchableOpacity
          activeOpacity={1}
          onPress={hanldeCountryCodeOnPress}
          style={styles.countryCodeTextView}>
          <Text style={styles.codeStyle}>{'+ ' + selected}</Text>
          <View style={styles.lineView} />
        </TouchableOpacity>
        <CustomTextInput width={245} style={{marginLeft: normalize(8)}} />
      </View>
      <CountryCodeModal
        selected={selected}
        isVisible={isVisible}
        setSelected={selectionHandler}
        hanldeCountryCodeOnPress={hanldeCountryCodeOnPress}
      />
      <CustomButton
        text={'Continue'}
        marginTop={128}
        width={327}
        bgColor={'rgba(88, 213, 130, 1)'}
      />
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
    alignItems: 'center',
  },
  mainView: {
    backgroundColor: color.white,
  },
  lineView: {
    width: vw(1),
    height: vw(15),
    backgroundColor: color.black,
  },
  codeStyle: {
    fontSize: normalize(15),
    marginTop: normalize(14),
    lineHeight: 24,
  },
  countryCodeTextView: {
    backgroundColor: '#f7f7fc',
    width: normalize(74),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    height: normalize(36),
  },
});
