import {Image, TouchableOpacity, View, Text} from 'react-native';
import React from 'react';
import styles from './style';

const Header = ({onPress, style = [], header, backVisible}) => {
  return (
    <View
      style={[styles.headerMain, !backVisible ? styles.headerWithoutBack : {}]}>
      {backVisible ? (
        <TouchableOpacity
          hitSlop={{top: 20, left: 20, right: 20, bottom: 20}}
          onPress={onPress}
          style={[...style, styles.backButton]}>
          <Image
            style={styles.backText}
            source={require('../../assets/images/left.png')}
          />
        </TouchableOpacity>
      ) : null}
      <Text style={styles.headerText}>{header}</Text>
    </View>
  );
};

export default Header;
