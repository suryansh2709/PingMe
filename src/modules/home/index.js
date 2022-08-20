import {View} from 'react-native';
import React, {useState} from 'react';
import CustomTab from '../../navigator/tab';
import Call from './Call';
import Setting from './Setting';
import Status from './Status';
import ChatList from './Chat';

const Home = () => {
  const [currentScreen, setCurrentScreen] = useState('Chat');

  const handleCurrentTabCallback = args => {
    console.log('arg', args);
    setCurrentScreen(args?.title);
  };

  const currentScreenViewHandler = () => {
    switch (currentScreen) {
      case 'Chat':
        return <ChatList />;
      case 'Call':
        return <Call />;
      case 'Setting':
        return <Setting />;
      case 'Status':
        return <Status />;
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {currentScreenViewHandler()}
      <CustomTab handleCurrentTabCallback={handleCurrentTabCallback} />
    </View>
  );
};

export default Home;
