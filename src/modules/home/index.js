import Call from './Call';
import ChatList from './Chat';
import Status from './Status';
import Setting from './Setting';
import React, {useState} from 'react';
import {string} from '../../utils/strings';
import CustomTab from '../../navigator/tab';
import {View, StyleSheet} from 'react-native';
import {color} from '../../utils/colors';

const Home = () => {
  const [currentScreen, setCurrentScreen] = useState(string.chat);

  const handleCurrentTabCallback = args => {
    setCurrentScreen(args?.title);
  };

  const currentScreenViewHandler = () => {
    switch (currentScreen) {
      case string.chat:
        return <ChatList />;
      case string.call:
        console.log('call');
        return <Call />;
      case string.setting:
        return <Setting />;
      case string.status:
        return <Status />;
    }
  };

  return (
    <View style={styles.mainView}>
      {currentScreenViewHandler()}
      <CustomTab handleCurrentTabCallback={handleCurrentTabCallback} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainView: {flex: 1, backgroundColor: color.white},
});
