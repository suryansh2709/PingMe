import {FlatList, SafeAreaView} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import HomeHeader from '../../../components/commonHomeHeader';
import firestore from '@react-native-firebase/firestore';
import {useSelector} from 'react-redux';
import {styles} from './style';
import RenderChatCard from './renderChatCard';
import {useNavigation} from '@react-navigation/native';

const ChatList = () => {
  const {loggedInUser} = useSelector(store => store.userDataReducer);

  /**
   * gets the user from the firestore.
   */
  const getUsers = async () => {
    console.log('loggedInUser.uid', loggedInUser.uid);
    const querySnap = await firestore()
      .collection('Users')
      .where('id', '!=', loggedInUser.uid)
      .get();
    console.log('querySnap', querySnap);
    const allUsers = querySnap.docs?.map(docSnap => docSnap.data());
    console.log('alluser', allUsers);
    setStaticData(allUsers);
  };

  useEffect(() => {
    getUsers();
  }, []);

  /**
   *
   * @param {*} item
   * @returns id
   */

  const _keyExtractor = ({id}) => {
    return id;
  };

  const [staticData, setStaticData] = useState([]);

  /**
   * renders the chat list.
   */
  const onRender = useCallback(
    ({item}) => {
      const {displayImage, fName, lName, id} = item;

      return (
        <RenderChatCard
          id={id}
          fName={fName}
          lName={lName}
          displayImage={displayImage}
        />
      );
    },
    [staticData],
  );
  return (
    <SafeAreaView style={styles.homeMainView}>
      <HomeHeader />
      <FlatList
        keyExtractor={_keyExtractor}
        data={staticData}
        renderItem={onRender}
      />
    </SafeAreaView>
  );
};

export default React.memo(ChatList);
