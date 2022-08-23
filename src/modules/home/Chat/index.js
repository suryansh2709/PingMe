import {FlatList, SafeAreaView, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import HomeHeader from '../../../components/commonHomeHeader';
import firestore from '@react-native-firebase/firestore';
import {useSelector} from 'react-redux';
import {styles} from './style';
import RenderChatCard from './renderChatCard';
import {vh} from '../../../utils/dimensions';

const ChatList = () => {
  const {loggedInUser} = useSelector(store => store.userDataReducer);

  /**
   * gets the user from the firestore.
   */
  const getUsers = async () => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   *
   * @param {*} item
   * @returns id
   */

  const _keyExtractor = ({id}) => {
    return id;
  };

  const _itemSeperator = () => {
    return <View style={styles.itemSeperatorView} />;
  };

  const [staticData, setStaticData] = useState([]);

  /**
   * renders the chat list.
   */
  const onRender = useCallback(
    ({item}) => {
      console.log('Shubhankar Item', item);
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
        ItemSeparatorComponent={_itemSeperator}
      />
    </SafeAreaView>
  );
};

export default React.memo(ChatList);
