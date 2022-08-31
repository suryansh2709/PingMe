import {styles} from './style';
import TextModal from './textModal';
import React, {useState} from 'react';
import FastImage from 'react-native-fast-image';
import {string} from '../../../../utils/strings';
import Loader from '../../../../components/loader';
import storage from '@react-native-firebase/storage';
import {useSelector, useDispatch} from 'react-redux';
import {setUser} from '../../../../redux/auth/action';
import {useNavigation} from '@react-navigation/native';
import localImages from '../../../../utils/localImages';
import Header from '../../../../components/commonHeader';
import firestore from '@react-native-firebase/firestore';
import {showToast} from '../../../../utils/commonFunctions';
import IconButton from '../../../../components/iconButtons';
import ImageCropPicker from 'react-native-image-crop-picker';
import {Text, View, Image, TouchableOpacity, Platform} from 'react-native';

export default function Profile() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [caller, setCaller] = useState('');
  const [loader, setLoader] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [change, setChange] = useState(loggedInUser?.fName);
  const {loggedInUser} = useSelector(store => store.userDataReducer);
  const reference = storage().ref(
    `${loggedInUser?.uid}/IMG_${Math.floor(Math.random() * 100000000)}.jpg`,
  );

  const handleNameChange = name => {
    dispatch(setUser({...loggedInUser, fName: name}));
    firestore()
      .collection('Users')
      .doc(loggedInUser?.uid)
      .update({fName: name});
  };

  const handleAboutChange = about => {
    dispatch(setUser({...loggedInUser, about: about}));
    firestore()
      .collection('Users')
      .doc(loggedInUser?.uid)
      .update({about: about});
  };

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
                dispatch(setUser({...loggedInUser, displayImage: result}));
                firestore()
                  .collection('Users')
                  .doc(loggedInUser?.uid)
                  .update({displayImage: result});
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
                  dispatch(setUser({...loggedInUser, displayImage: result}));
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
  return (
    <View style={styles.centeredView}>
      <Header
        header={'Profile'}
        backVisible
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.modalView}>
        <View style={styles.profileView}>
          <TouchableOpacity
            style={styles.deleteIconView}
            activeOpacity={0.5}
            onPress={onAddImagePress}>
            <Image source={localImages.add} style={styles.deleteImage} />
          </TouchableOpacity>
          <View style={styles.profilePicView}>
            <FastImage
              source={{uri: loggedInUser?.displayImage}}
              style={styles.profileImage}
            />
          </View>
        </View>
        <View style={styles.inputModalView}>
          <Text style={styles.profileDataName}>{'Name'}</Text>
          <View style={styles.editDataView}>
            <Text style={styles.dataText}>{loggedInUser?.fName}</Text>
            <IconButton
              image={localImages.pencilIcon}
              imageStyle={styles.pencilImageData}
              onPress={() => {
                setCaller('Name');
                setChange(loggedInUser?.name);
                setModalVisible(true);
              }}
            />
          </View>
        </View>
        <View style={styles.inputModalView}>
          <Text style={styles.profileDataName}>{'Phone Number'}</Text>
          <View style={styles.editDataView}>
            <Text style={styles.dataText}>{loggedInUser?.phoneNumber}</Text>
          </View>
        </View>
        <View style={styles.inputModalView}>
          <Text style={styles.profileDataName}>{'About'}</Text>
          <View style={styles.editDataView}>
            <Text style={styles.dataText}>{loggedInUser?.about}</Text>
            <IconButton
              image={localImages.pencilIcon}
              imageStyle={styles.pencilImageData}
              onPress={() => {
                setCaller('About');
                setChange(loggedInUser?.about);
                setModalVisible(true);
              }}
            />
          </View>
        </View>
      </View>
      <TextModal
        caller={caller}
        changing={change}
        handleNameChange={handleNameChange}
        handleAboutChange={handleAboutChange}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <Loader loader={loader} />
    </View>
  );
}
