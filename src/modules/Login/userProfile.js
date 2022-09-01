import {Platform} from 'react-native';
import React, {useCallback, useLayoutEffect, useState} from 'react';
import Header from '../../components/commonHeader';
import {color} from '../../utils/colors';
import CustomButton from '../../components/customButton/customButton';
import {string} from '../../utils/strings';
import {styles} from './style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {firstNameTest, userNameTest} from '../../utils/validation';
import {useDispatch, useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import {showToast} from '../../utils/commonFunctions';
import ImageCropPicker from 'react-native-image-crop-picker';
import Loader from '../../components/loader';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {setUser} from '../../redux/auth/action';
import storage from '@react-native-firebase/storage';
import FormComponent from './FormComponent';

function UserProfile() {
  const {loggedInUser} = useSelector(store => store.userDataReducer);
  const reference = storage().ref(
    `${loggedInUser?.uid}/IMG_${Math.floor(Math.random() * 100000000)}.jpg`,
  );
  const [checkUser, setCheckUser] = useState({});
  useLayoutEffect(() => {
    firestore()
      .collection('Users')
      .get()
      .then(res => {
        const a = res._docs.map(ele => ele.data());
        console.log(a[0]);
        setCheckUser(a[0]);
      })
      .catch(() => {});
  }, []);
  const [infoDetails, setInfoDetails] = useState({
    userName: '',
    fName: '',
    lName: '',
    date: new Date(),
    about: '',
    displayImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
  });
  const [loader, setLoader] = useState(false);
  const navigation = useNavigation();
  const [open, setOPen] = useState(false);
  const dispatch = useDispatch();

  console.log('infodetails', infoDetails);

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
        if (Platform.OS === 'ios') {
          reference
            .putFile(res?.sourceURL)
            .then(res => {
              console.log('uploaded', res);
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
                console.log('uploaded', res);
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

  const handleContineuPress = useCallback(() => {
    console.log('infodetails', infoDetails);
    setLoader(true);
    if (infoDetails?.userName.length < 2) {
      showToast('Invalid username');
      setLoader(false);
    } else if (!firstNameTest(infoDetails.fName)) {
      showToast('Invalid name');
      setLoader(false);
    } else {
      let user = {...infoDetails};
      firestore()
        .collection('Users')
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isDisable = () => {
    if (
      infoDetails.userName.length > 4 &&
      infoDetails.fName.length > 2 &&
      infoDetails.about.length > 5
    ) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <KeyboardAwareScrollView style={styles.userProfileMainView} bounces={false}>
      <Header header={'Your Profile'} />
      <FormComponent
        onAddImagePress={onAddImagePress}
        infoDetails={infoDetails}
        setInfoDetails={setInfoDetails}
        open={open}
        setOPen={setOPen}
      />
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
export default React.memo(UserProfile);
