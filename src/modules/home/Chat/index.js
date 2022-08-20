import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import Data from './utils';
import HomeHeader from '../../../components/commonHomeHeader';
import {vh, vw} from '../../../utils/dimensions';
import {color} from '../../../utils/colors';

const ChatList = () => {
  // eslint-disable-next-line no-unused-vars
  const [staticData, setStaticData] = useState(Data);
  const onRender = ({item}) => {
    return (
      <TouchableOpacity style={styles.homeChatMainView} activeOpacity={0.6}>
        <Image source={item?.profile} style={styles.chatUserImage} />
        <View style={styles.nameView}>
          <Text style={styles.userName}>{item?.name}</Text>
          <Text style={styles.userChatMessage} numberOfLines={1}>
            {item?.message}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.homeMainView}>
      <HomeHeader />
      <FlatList data={staticData} renderItem={onRender} />
    </SafeAreaView>
  );
};

export default ChatList;

const styles = StyleSheet.create({
  homeMainView: {flex: 1},
  homeChatMainView: {
    flexDirection: 'row',
    height: vh(68),
    marginTop: vh(5),
    marginHorizontal: vw(16),
    borderBottomWidth: 1,
    borderBottomColor: color.darkGreen,
    alignItems: 'center',
  },
  chatUserImage: {
    height: vh(60),
    width: vh(60),
    borderRadius: 3,
  },
  userChatMessage: {
    fontSize: vh(16),
    fontWeight: '400',
    color: 'rgba(119, 131, 143, 1)',
    marginTop: vh(5),
  },
  nameView: {
    marginLeft: vw(14),
    justifyContent: 'space-between',
    height: vh(50),
  },
  userName: {fontSize: vh(16), fontWeight: '400'},
});
