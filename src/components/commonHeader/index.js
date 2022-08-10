import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './style';

const Header = ({onPress, style = []}) => {
  return (
    <View style={styles.headerMain}>
      <TouchableOpacity
        hitSlop={{top: 20, left: 20, right: 20, bottom: 20}}
        onPress={onPress}
        style={[...style, styles.backButton]}>
        <Image
          style={styles.backText}
          source={require('../../assets/images/left.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
