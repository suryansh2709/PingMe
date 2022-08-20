import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import CustomTab from '../../navigator/tab';
import Call from './Call';
import Setting from './Setting';
import Status from './Status';
import ChatList from './Chat';

const Home = () => {
  const [currentScreen, setCurrentScreen] = useState('Chat');

  const handleCurrentTabCallback = args => {
    setCurrentScreen(args?.title);
  };

  const currentScreenViewHandler = () => {
    switch (currentScreen) {
      case 'Chat':
        return <ChatList />;
      case 'Calls':
        console.log('call');
        return <Call />;
      case 'Settings':
        return <Setting />;
      case 'Status':
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
  mainView: {flex: 1, backgroundColor: 'white'},
});
