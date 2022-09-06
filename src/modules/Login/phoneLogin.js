import {styles} from './style';
import React, {useState} from 'react';
import {color} from '../../utils/colors';
import {string} from '../../utils/strings';
import Loader from '../../components/loader';
import {normalize} from '../../utils/dimensions';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';
import CountryCodeModal from '../../components/countryCodeModal';
import {signInWirhPhoneNumber} from '../../utils/commonFunctions';
import CustomButton from '../../components/customButton/customButton';
import {countryCodes} from '../../components/countryCodeModal/utils/phoneData';
import CustomTextInput from '../../components/customTextInput/customTextInput';

export default function PhoneLogin() {
  const navigation = useNavigation();
  const [number, setNumber] = useState('');
  const [loader, setLoader] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [selected, setSelected] = useState(countryCodes[0].code);

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
        navigation.navigate(string.otp, {
          confirm: confirmation,
          number: number,
          selected: selected,
        });
        setLoader(false);
      },
      () => {
        setLoader(false);
      },
    );
  };
  return (
    <>
      <View style={styles.countryCodeView}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={hanldeCountryCodeOnPress}
          style={styles.countryCodeTextView}>
          <Text style={styles.codeStyle}>{'+ ' + selected}</Text>
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
      <CustomButton
        disableColor={color.grey}
        disable={number.length < 10}
        text={string.continue}
        marginTop={130}
        width={327}
        bgColor={color.buttonBackground}
        textColor={color.white}
        onPressButton={handleContineuPress}
      />
      <Loader loader={loader} />
    </>
  );
}
