import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/commonHeader';
import CustomTextInput from '../../components/customTextInput/customTextInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {string} from '../../utils/strings';
import CountryCodeModal from '../../components/countryCodeModal';
import {countryCodes} from '../../components/countryCodeModal/utils/phoneData';
import CustomButton from '../../components/customButton/customButton';
import {useNavigation} from '@react-navigation/native';
import {styles} from './style';
import {normalize} from '../../utils/dimensions';
import {color} from '../../utils/colors';
import {signInWirhPhoneNumber} from '../../utils/commonFunctions';
import Loader from '../../components/loader';
import HeadingView from './headingView';

export default function PhoneLogin() {
  const [isVisible, setIsVisible] = useState(false);
  const [selected, setSelected] = useState(countryCodes[0].code);
  const [number, setNumber] = useState('');
  const navigation = useNavigation();
  const [loader, setLoader] = useState(false);

  const selectionHandler = code => {
    setSelected(code);
  };

  const handleChangeText = txt => {
    setNumber(txt);
  };

  const hanldeCountryCodeOnPress = () => {
    setIsVisible(!isVisible);
  };

  const handleContineuPress = () => {
    setLoader(true);
    signInWirhPhoneNumber(
      selected,
      number,
      confirmation => {
        navigation.navigate('Otp', {confirm: confirmation, number: number});
        setLoader(false);
      },
      () => {
        setLoader(false);
      },
    );
  };
  return (
    <KeyboardAwareScrollView
      style={styles.mainView}
      bounces={false}
      scrollEnabled={false}>
      <Header header={'Login'} />
      <HeadingView
        bigHeader={string.enterEmail}
        smallHeader={string.confirmCountryCode}
      />
      <Text style={styles.recommendText}>{string.recommend}</Text>
      <View style={styles.countryCodeView}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={hanldeCountryCodeOnPress}
          style={styles.countryCodeTextView}>
          <Text style={styles.codeStyle}>{'+ ' + selected}</Text>
          <View style={styles.lineView} />
        </TouchableOpacity>
        <CustomTextInput
          width={245}
          style={{marginLeft: normalize(8)}}
          color={color.lightGrey}
          value={number}
          maxLength={10}
          keyboardType={'numeric'}
          onChangeText={handleChangeText}
        />
      </View>
      <CountryCodeModal
        selected={selected}
        isVisible={isVisible}
        setSelected={selectionHandler}
        hanldeCountryCodeOnPress={hanldeCountryCodeOnPress}
      />
      <View style={styles.buttonView}>
        <CustomButton
          disableColor={color.grey}
          disable={number.length < 10}
          text={'Continue'}
          marginTop={128}
          width={327}
          bgColor={'rgba(88, 213, 130, 1)'}
          textColor={color.white}
          onPressButton={handleContineuPress}
        />
      </View>
      <Loader loader={loader} />
    </KeyboardAwareScrollView>
  );
}
