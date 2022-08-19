import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/commonHeader';
import {color} from '../../utils/colors';
import localImages from '../../utils/localImages';
import CustomTextInput from '../../components/customTextInput/customTextInput';
import CustomButton from '../../components/customButton/customButton';
import {string} from '../../utils/strings';
import {styles} from './style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default function UserProfile() {
  const [infoDetails, setInfoDetails] = useState({
    userName: '',
    fName: '',
    lName: '',
    date: '',
    gender: '',
  });
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
        disable={true}
        // onPressButton={handleContineuPress}
      />
    </KeyboardAwareScrollView>
  );
}
