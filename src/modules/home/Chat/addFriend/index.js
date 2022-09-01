import {
  Text,
  SafeAreaView,
  FlatList,
  View,
  TouchableOpacity,
} from 'react-native';
import {styles} from './style';
import {useSelector} from 'react-redux';
import FastImage from 'react-native-fast-image';
import ContactHeader from './contactListHeader';
import {string} from '../../../../utils/strings';
import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {getUsers, showToast} from '../../../../utils/commonFunctions';

export default function AddFriend() {
  const navigation = useNavigation();
  const [allUsers, setAllUsers] = useState([]);
  const {loggedInUser} = useSelector(store => store.userDataReducer);

  useEffect(() => {
    getUsers(
      loggedInUser.uid,
      allUser => {
        setAllUsers(allUser);
      },
      err => {
        showToast(err.message);
      },
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _keyExtractor = ({id}) => {
    return id;
  };
  const renderAllUsers = useCallback(
    ({item}) => {
      const {id, fName, displayImage, isActive, about} = item;
      const handleCardPress = () => {
        navigation.navigate(string.chatRoom, {
          id,
          fName,
          displayImage,
          isActive,
        });
      };
      return (
        <TouchableOpacity
          onPress={handleCardPress}
          style={styles.homeChatMainView}>
          <View style={styles.chatUserImage}>
            <FastImage
              source={{uri: displayImage}}
              style={styles.chatUserImage}
            />
          </View>
          <View style={styles.nameView}>
            <Text style={styles.userName}>{fName}</Text>
            <Text style={styles.userChatMessage}>{about}</Text>
          </View>
        </TouchableOpacity>
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [allUsers],
  );
  return (
    <SafeAreaView style={styles.mainView}>
      <ContactHeader />
      <FlatList
        data={allUsers}
        renderItem={renderAllUsers}
        keyExtractor={_keyExtractor}
      />
    </SafeAreaView>
  );
}
