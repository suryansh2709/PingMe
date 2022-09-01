import {
  Text,
  SafeAreaView,
  FlatList,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {styles} from './style';
import {useSelector} from 'react-redux';
import ContactHeader from './contactListHeader';
import {string} from '../../../../utils/strings';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {getUsers, showToast} from '../../../../utils/commonFunctions';

export default function AddFriend() {
  const navigation = useNavigation();
  const [allUsers, setAllUsers] = useState([]);
  const {loggedInUser} = useSelector(store => store.userDataReducer);

  useEffect(() => {
    getUsers(
      loggedInUser.uid,
      allUsers => {
        setAllUsers(allUsers);
        console.log(allUsers);
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

  const renderAllUsers = ({item}) => {
    const {id, fName, displayImage, lastMessage, isActive} = item;
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(string.chatRoom, {
            id,
            fName,
            displayImage,
            isActive,
          });
        }}
        style={styles.homeChatMainView}>
        <View style={styles.chatUserImage}>
          <Image source={{uri: displayImage}} style={styles.chatUserImage} />
        </View>
        <View style={styles.nameView}>
          <Text style={styles.userName}>{fName}</Text>
          <Text style={styles.userChatMessage}>{lastMessage}</Text>
        </View>
      </TouchableOpacity>
    );
  };

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
