import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/commonHeader';
import {color} from '../../utils/colors';
import {vh, vw} from '../../utils/dimensions';
import localImages from '../../utils/localImages';
import CustomTextInput from '../../components/customTextInput/customTextInput';
import CustomButton from '../../components/customButton/customButton';
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
          placeholder={'UserName (Required)'}
          onChangeText={text => {
            setInfoDetails({...infoDetails, userName: text});
          }}
        />
        <CustomTextInput
          width={335}
          color={color.lightGrey}
          style={styles.userInputStyle}
          placeholder={'First Name (Required)'}
          onChangeText={text => {
            setInfoDetails({...infoDetails, fName: text});
          }}
        />
        <CustomTextInput
          width={335}
          color={color.lightGrey}
          style={styles.userInputStyle}
          placeholder={'Last Name (Optional)'}
          onChangeText={text => {
            setInfoDetails({...infoDetails, lName: text});
          }}
        />
        <CustomTextInput
          width={335}
          color={color.lightGrey}
          style={styles.userInputStyle}
          placeholder={'Date Of Birth (Optional)'}
          onChangeText={text => {
            setInfoDetails({...infoDetails, date: text});
          }}
        />
        <CustomTextInput
          width={335}
          color={color.lightGrey}
          style={styles.userInputStyle}
          placeholder={'Gender (Optional)'}
          onChangeText={text => {
            setInfoDetails({...infoDetails, gender: text});
          }}
        />
      </View>
      <CustomButton
        text={'Save'}
        marginTop={128}
        width={327}
        bgColor={'rgba(88, 213, 130, 1)'}
        textColor={color.white}
      />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  userProfileMainView: {backgroundColor: color.white},
  deleteIconView: {
    height: vh(30),
    width: vh(30),
    backgroundColor: color.white,
    padding: 2,
    position: 'absolute',
    borderRadius: 40,
    right: 140,
    bottom: 15,
    borderColor: 'white',
    zIndex: 1,
  },
  deleteImage: {zIndex: 1, height: '100%', width: '100%'},
  profilePicView: {
    height: vh(120),
    width: vh(120),
    alignSelf: 'center',
    borderRadius: 90,
    backgroundColor: color.grey,
  },
  profileView: {
    flex: 0.25,
    justifyContent: 'flex-end',
    paddingHorizontal: vw(25),
  },
  textInputView: {flex: 0.45},
  profileImage: {height: '100%', width: '100%'},
  userInputStyle: {marginHorizontal: 25, marginTop: 20},
});
