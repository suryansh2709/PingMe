import {View, Image, TouchableOpacity, Text, Platform} from 'react-native';
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
import {useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import {showToast} from '../../utils/commonFunctions';
import ImageCropPicker from 'react-native-image-crop-picker';
import Loader from '../../components/loader';
import {useNavigation} from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';
export default function UserProfile() {
  const {loggedInUser} = useSelector(store => store.userDataReducer);
  const [infoDetails, setInfoDetails] = useState({
    userName: '',
    fName: '',
    lName: '',
    date: new Date(),
    gender: '',
    displayImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
  });
  const [loader, setLoader] = useState(false);
  const navigation = useNavigation();
  const [open, setOPen] = useState(false);

  /**
   * Setting Display Image.
   */

  const onAddImagePress = () => {
    setLoader(true);
    ImageCropPicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(res => {
        if (Platform.OS === 'ios') {
          setInfoDetails({...infoDetails, displayImage: res?.sourceURL});
          setLoader(false);
          showToast('Profile Image Updated');
        } else {
          setInfoDetails({...infoDetails, displayImage: res?.path});
          setLoader(false);
          showToast('Profile Image Updated');
        }
      })
      .catch(err => {
        showToast(err.message);
        setLoader(false);
        console.log(err.message);
      });
  };

  const handleContineuPress = () => {
    setLoader(true);
    if (!userNameTest(infoDetails.userName)) {
      showToast('Invalid username');
      setLoader(false);
    } else if (!firstNameTest(infoDetails.fName)) {
      showToast('Invalid name');
      setLoader(false);
    } else {
      let user = {...infoDetails};
      firestore()
        .collection('Users')
        .doc(loggedInUser._user.uid)
        .update({
          ...user,
        })
        .then(() => {
          setLoader(false);
          navigation.navigate('HomeStack');
        })
        .catch(err => console.log(err));
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
        <TouchableOpacity
          onPress={onAddImagePress}
          style={styles.deleteIconView}
          activeOpacity={0.5}>
          <Image source={localImages.add} style={styles.deleteImage} />
        </TouchableOpacity>
        <View style={styles.profilePicView}>
          <Image
            source={{
              uri: infoDetails?.displayImage,
            }}
            style={styles.profileImage}
          />
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
        <View style={styles.datePickerView}>
          <View style={styles.dateDisplayView}>
            <Text style={{color: color.darkGreen}}>
              {' '}
              {`${JSON.stringify(
                infoDetails?.date?.getDate(),
              )}/${JSON.stringify(
                infoDetails.date.getMonth() + 1,
              )}/${JSON.stringify(infoDetails.date.getFullYear() - 18)}`}
            </Text>
          </View>
          <TouchableOpacity onPress={() => setOPen(true)}>
            <Image
              source={localImages.calenderIcon}
              style={styles.calenderImage}
            />
          </TouchableOpacity>
        </View>
        <DatePicker
          mode="date"
          modal
          open={open}
          date={infoDetails.date}
          onConfirm={date => {
            setOPen(false);
            setInfoDetails({...infoDetails, date: date});
          }}
          onCancel={() => {
            setOPen(false);
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
      <Loader loader={loader} />
    </KeyboardAwareScrollView>
  );
}
