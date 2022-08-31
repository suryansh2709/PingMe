import {
  FlatList,
  SafeAreaView,
  View,
  Text,
  Platform,
  StatusBar,
  Animated,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import HomeHeader from '../../../components/commonHomeHeader';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './style';
import RenderChatCard from './renderChatCard';
import {logOut, showToast} from '../../../utils/commonFunctions';
import {StackActions, useNavigation} from '@react-navigation/native';
import {string} from '../../../utils/strings';
import Loader from '../../../components/loader';
import {setUser} from '../../../redux/auth/action';
import Tooltip from 'react-native-walkthrough-tooltip';
import SearchHeader from './searchHeader';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import firestore from '@react-native-firebase/firestore';

const ChatList = () => {
  const {loggedInUser} = useSelector(store => store.userDataReducer);
  console.log('SHubhankar', loggedInUser);
  const navigation = useNavigation();
  const [loader, setLoader] = useState(false);
  const [showTip, setTip] = useState(false);
  const [search, setSearch] = useState(true);
  const transform = useState(new Animated.Value(0))[0];
  const dispatch = useDispatch();
  const [staticData, setStaticData] = useState([]);

  let scale = {
    transform: [
      {
        scale: transform.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        }),
      },
    ],
    position: 'absolute',
    top: getStatusBarHeight(),
    zIndex: 10,
  };

  useEffect(() => {
    const abc = firestore()
      .collection('Users')
      .doc(loggedInUser.uid)
      .collection('Inbox')
      .onSnapshot(doc => {
        const dataArray = doc?._docs.map(element => element._data);
        setStaticData(dataArray);
        console.log('dataArray', dataArray);
      });
    console.log('abc', abc);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTooltipPress = () => {
    setTip(!showTip);
    navigation.navigate(string.profile, {});
  };

  const handleLogOut = () => {
    setTip(!showTip);
    setLoader(true);
    logOut(
      loggedInUser?.uid,
      () => {
        console.log('logh');
        setTimeout(() => {
          setLoader(false);
          dispatch(setUser({}));
          navigation.dispatch(StackActions.replace(string.loginStack));
        }, 1000);
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

  const _keyExtractor = ({fName}) => {
    return fName + '1';
  };

  const _itemSeperator = () => {
    return <View style={styles.itemSeperatorView} />;
  };

  /**
   * renders the chat list.
   */
  const onRender = useCallback(
    ({item}) => {
      const {displayImage, fName, lName, id, isActive, lastMessage} = item;
      return (
        <RenderChatCard
          id={id}
          fName={fName}
          lName={lName}
          isActive={isActive}
          lastMessage={lastMessage}
          displayImage={displayImage}
        />
      );
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [staticData],
  );

  const searchPress = () => {
    Animated.timing(transform, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const backPress = () => {
    Animated.timing(transform, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const toolTip = () => {
    setTip(!showTip);
  };
  return (
    <SafeAreaView style={styles.homeMainView}>
      {/* {search ? ( */}
      <HomeHeader
        search={search}
        setSearch={setSearch}
        toolTip={toolTip}
        addFriend={() => {
          navigation.navigate('AddFriend');
        }}
        onsearchPress={searchPress}
      />
      <SearchHeader
        search={search}
        setSearch={setSearch}
        animatedStyle={scale}
        onBackPress={backPress}
      />
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
            <Text onPress={handleLogOut} style={styles.toolTipTextStyle}>
              {'Logout'}
            </Text>
          </View>
        }
        onClose={() => setTip(!showTip)}
      />
      <FlatList
        data={staticData}
        renderItem={onRender}
        keyExtractor={_keyExtractor}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={_itemSeperator}
      />

      <Loader loader={loader} />
    </SafeAreaView>
  );
};

export default React.memo(ChatList);
