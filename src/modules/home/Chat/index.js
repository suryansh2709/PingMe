import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ChatList = () => {
  const RenderChatBar = () => {
    return (
      <TouchableOpacity>
        <Text>{'Hello'}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1, paddingTop: 100}}>
      <FlatList
        data={[1, 2, 3]}
        renderItem={({item}) => {
          return <RenderChatBar />;
        }}
      />
    </View>
  );
};

export default ChatList;
