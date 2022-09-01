import {styles} from './style';
import React, {useState} from 'react';
import {color} from '../../utils/colors';
import {string} from '../../utils/strings';
import Loader from '../../components/loader';
import {setUser} from '../../redux/auth/action';
import DatePicker from 'react-native-date-picker';
import localImages from '../../utils/localImages';
import Header from '../../components/commonHeader';
import storage from '@react-native-firebase/storage';
import {useDispatch, useSelector} from 'react-redux';
import {showToast} from '../../utils/commonFunctions';
import firestore from '@react-native-firebase/firestore';
import ImageCropPicker from 'react-native-image-crop-picker';
import {firstNameTest, userNameTest} from '../../utils/validation';
import CustomButton from '../../components/customButton/customButton';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {View, Image, TouchableOpacity, Text, Platform} from 'react-native';
import CustomTextInput from '../../components/customTextInput/customTextInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default function UserProfile() {
  const {loggedInUser} = useSelector(store => store.userDataReducer);
  const reference = storage().ref(
    `${loggedInUser?.uid}/IMG_${Math.floor(Math.random() * 100000000)}.jpg`,
  );
  const [infoDetails, setInfoDetails] = useState({
    userName: '',
    fName: '',
    lName: '',
    date: new Date(),
    about: '',
    displayImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
  });
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [open, setOPen] = useState(false);
  const [loader, setLoader] = useState(false);

  /**
   * Setting Display Image.
   */

  const onAddImagePress = () => {
    setLoader(true);
    ImageCropPicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      compressImageQuality: 0.2,
    })
      .then(res => {
        if (Platform.OS === string.ios) {
          reference
            .putFile(res?.sourceURL)
            .then(res => {
              reference.getDownloadURL().then(result => {
                setInfoDetails({...infoDetails, displayImage: result});
                setLoader(false);
                showToast(string.profileUpdate);
              });
            })
            .catch(err => console.log('Err', err));
        } else {
          reference &&
            reference
              .putFile(res?.path)
              .then(res => {
                reference.getDownloadURL().then(result => {
                  setInfoDetails({...infoDetails, displayImage: result});
                  setLoader(false);
                  showToast(string.profileUpdate);
                });
              })
              .catch(err => console.log('Err', err));
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
      showToast(string.invalidUserName);
      setLoader(false);
    } else if (!firstNameTest(infoDetails.fName)) {
      showToast(string.invalidName);
      setLoader(false);
    } else {
      let user = {...infoDetails};
      firestore()
        .collection(string.users)
        .doc(loggedInUser?.uid)
        .update({
          ...user,
        })
        .then(() => {
          setLoader(false);
          dispatch(setUser({...loggedInUser, ...infoDetails}));
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: string.homeStack}],
            }),
          );
        })
        .catch(err => console.log(err));
    }
  };

  const isDisable = () => {
    if (
      infoDetails.userName.length > 4 &&
      infoDetails.fName.length > 2 &&
      infoDetails.about.length > 3
    ) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <KeyboardAwareScrollView style={styles.userProfileMainView} bounces={false}>
      <Header header={string.yourProfile} />
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
              )}/${JSON.stringify(infoDetails.date.getFullYear())}`}
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
          placeholder={string.about}
          onChangeText={text => {
            setInfoDetails({...infoDetails, about: text});
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
