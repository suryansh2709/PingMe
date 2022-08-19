import {View, Image, TouchableOpacity, Text} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/commonHeader';
import {color} from '../../utils/colors';
import localImages from '../../utils/localImages';
import CustomTextInput from '../../components/customTextInput/customTextInput';
import CustomButton from '../../components/customButton/customButton';
import {string} from '../../utils/strings';
import {styles} from './style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {firstNameTest, userNameTest} from '../../utils/validation';

export default function UserProfile() {
  const [err, setErr] = useState(false);
  const [errTxt, setErrTxt] = useState('');
  const [infoDetails, setInfoDetails] = useState({
    userName: '',
    fName: '',
    lName: '',
    date: '',
    gender: '',
  });
  const handleContineuPress = () => {
    if (!firstNameTest(infoDetails.userName)) {
      setErr(true);
      setErrTxt(string.incorrectName);
    } else if (!userNameTest(infoDetails.fName)) {
      setErr(true);
      setErrTxt(string.incorrectUserName);
    } else {
      setErr(false);
      console.log('ye chala');
    }
  };

  const isDisable = () => {
    if (infoDetails.userName.length > 4 && infoDetails.fName.length > 2) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <KeyboardAwareScrollView style={styles.userProfileMainView} bounces={false}>
      <Header header={'Your Profile'} />
      <View style={styles.profileView}>
        <TouchableOpacity style={styles.deleteIconView} activeOpacity={0.5}>
          <Image source={localImages.add} style={styles.deleteImage} />
        </TouchableOpacity>
        <View style={styles.profilePicView}>
          <Image source={localImages.user} style={styles.profileImage} />
        </View>
      </View>
      <View style={styles.textInputView}>
        <CustomTextInput
          width={335}
          color={color.lightGrey}
          style={styles.userInputStyle}
          placeholder={string.userName}
          onChangeText={text => {
            setInfoDetails({...infoDetails, userName: text});
          }}
        />
        <CustomTextInput
          width={335}
          color={color.lightGrey}
          style={styles.userInputStyle}
          placeholder={string.firstName}
          onChangeText={text => {
            setInfoDetails({...infoDetails, fName: text});
          }}
        />
        <CustomTextInput
          width={335}
          color={color.lightGrey}
          style={styles.userInputStyle}
          placeholder={string.lastName}
          onChangeText={text => {
            setInfoDetails({...infoDetails, lName: text});
          }}
        />
        <CustomTextInput
          width={335}
          color={color.lightGrey}
          style={styles.userInputStyle}
          placeholder={string.DOB}
          onChangeText={text => {
            setInfoDetails({...infoDetails, date: text});
          }}
        />
        <CustomTextInput
          width={335}
          color={color.lightGrey}
          style={styles.userInputStyle}
          placeholder={string.gender}
          onChangeText={text => {
            setInfoDetails({...infoDetails, gender: text});
          }}
        />
      </View>
      <CustomButton
        text={string.save}
        marginTop={128}
        width={327}
        bgColor={'rgba(88, 213, 130, 1)'}
        textColor={color.white}
        disableColor={color.grey}
        disable={isDisable()}
        onPressButton={handleContineuPress}
      />
      {err ? (
        <View style={styles.errorStyleView}>
          <Image source={localImages.warningIcon} style={styles.errorImg} />
          <Text style={styles.errorText}>{errTxt}</Text>
        </View>
      ) : null}
    </KeyboardAwareScrollView>
  );
}
