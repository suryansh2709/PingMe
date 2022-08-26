import {
  FlatList,
  SafeAreaView,
  View,
  Text,
  Platform,
  StatusBar,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import HomeHeader from '../../../components/commonHomeHeader';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './style';
import RenderChatCard from './renderChatCard';
import {getUsers, logOut, showToast} from '../../../utils/commonFunctions';
import {StackActions, useNavigation} from '@react-navigation/native';
import {string} from '../../../utils/strings';
import Loader from '../../../components/loader';
import {setUser} from '../../../redux/auth/action';
import Tooltip from 'react-native-walkthrough-tooltip';

const ChatList = () => {
  const {loggedInUser} = useSelector(store => store.userDataReducer);
  const navigation = useNavigation();
  const [loader, setLoader] = useState(false);
  const [showTip, setTip] = useState(false);
  const dispatch = useDispatch();

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

  const handleTooltipPress = () => {
    setTip(!showTip);
    navigation.navigate(string.profile, {uid: userId});
  };

  const handleLogOut = () => {
    setTip(!showTip);
    setLoader(true);
    logOut(
      () => {
        setLoader(false);
        dispatch(setUser({}));
        navigation.dispatch(StackActions.replace(string.loginStack));
      },
      error => {
        setLoader(false);
        showToast(error.message);
      },
    );
  };

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
      const {displayImage, fName, lName, id, isActive} = item;

      return (
        <RenderChatCard
          id={id}
          fName={fName}
          lName={lName}
          displayImage={displayImage}
          isActive={isActive}
        />
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [staticData],
  );

  const toolTip = () => {
    setTip(!showTip);
  };
  return (
    <SafeAreaView style={styles.homeMainView}>
      <HomeHeader toolTip={toolTip} />
      <Tooltip
        topAdjustment={Platform.OS === 'android' ? -StatusBar.currentHeight : 0}
        backgroundColor="transparent"
        placement="right"
        contentStyle={styles.toolTipContainer}
        isVisible={showTip}
        content={
          <View style={styles.tooTipContentMainView}>
            <Text style={styles.toolTipTextStyle} onPress={handleTooltipPress}>
              {'Profile'}
            </Text>
            <View style={styles.contentLineSeperator} />
            <Text style={styles.toolTipTextStyle} onPress={handleLogOut}>
              {'Logout'}
            </Text>
          </View>
        }
        onClose={() => setTip(!showTip)}
      />

      <FlatList
        keyExtractor={_keyExtractor}
        data={staticData}
        renderItem={onRender}
        ItemSeparatorComponent={_itemSeperator}
        showsVerticalScrollIndicator={false}
      />

      <Loader loader={loader} />
    </SafeAreaView>
  );
};

export default React.memo(ChatList);
