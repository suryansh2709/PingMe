import {FlatList, SafeAreaView} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import HomeHeader from '../../../components/commonHomeHeader';
import {useSelector} from 'react-redux';
import {styles} from './style';
import RenderChatCard from './renderChatCard';
import {getUsers} from '../../../utils/commonFunctions';

const ChatList = () => {
  const {loggedInUser} = useSelector(store => store.userDataReducer);

  useEffect(() => {
    getUsers(
      loggedInUser.uid,
      allUsers => {
        setStaticData(allUsers);
      },
      err => {
        console.log(err);
      },
    );
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
