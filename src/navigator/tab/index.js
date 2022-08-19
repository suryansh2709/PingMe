import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import tabs from './utils';

export default function CustomTab() {
  const [bottomTabs, setBottomTabs] = useState(tabs);
  const onItemPress = item => {
    let i = tabs.findIndex(ele => ele === item);
    onFocusedChange(i);
  };

  const onFocusedChange = i => {
    bottomTabs.map((item, index) => {
      if (i === index) {
        item.isFocused = true;
      } else {
        item.isFocused = false;
      }
    });
    setBottomTabs([...bottomTabs]);
  };

  const onRender = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.homeTabView}
        onPress={() => onItemPress(item)}>
        <Image
          source={item?.isFocused ? item?.imageActive : item?.image}
          style={
            item?.isFocused
              ? styles.iconImageActiveStyle
              : styles.iconImageStyle
          }
        />
        <Text style={item?.isFocused ? styles.tabActiveText : styles.tabText}>
          {item?.title}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.tabView}>
      <FlatList
        data={bottomTabs}
        renderItem={onRender}
        horizontal
        bounces={false}
      />
    </View>
  );
}
