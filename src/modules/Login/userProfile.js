import {View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../../components/commonHeader';
import {color} from '../../utils/colors';
import localImages from '../../utils/localImages';
import CustomTextInput from '../../components/customTextInput/customTextInput';
import CustomButton from '../../components/customButton/customButton';
import {string} from '../../utils/strings';
import {styles} from './style';

export default function UserProfile() {
  return (
    <View style={styles.userProfileMainView}>
      <Header header={'Your Profile'} />
      <View style={styles.profileView}>
        <TouchableOpacity style={styles.deleteIconView} activeOpacity={0.5}>
          <Image source={localImages.add} style={styles.deleteImage} />
        </TouchableOpacity>
        <View style={styles.profilePicView}>
          <Image source={localImages.check} style={styles.profileImage} />
        </View>
      </View>
      <View style={styles.textInputView}>
        <CustomTextInput
          width={335}
          color={color.lightGrey}
          style={styles.userInputStyle}
          placeholder={string.userName}
        />
        <CustomTextInput
          width={335}
          color={color.lightGrey}
          style={styles.userInputStyle}
          placeholder={string.firstName}
        />
        <CustomTextInput
          width={335}
          color={color.lightGrey}
          style={styles.userInputStyle}
          placeholder={string.lastName}
        />
        <CustomTextInput
          width={335}
          color={color.lightGrey}
          style={styles.userInputStyle}
          placeholder={string.DOB}
        />
        <CustomTextInput
          width={335}
          color={color.lightGrey}
          style={styles.userInputStyle}
          placeholder={string.gender}
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
    </View>
  );
}
