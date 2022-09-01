import React from 'react';
import styles from './style';
import {Image, TouchableOpacity, View, Text} from 'react-native';
import localImages from '../../utils/localImages';

const Header = ({onPress, style = [], header, backVisible}) => {
  return (
    <View
      style={[
        styles.headerMain,
        !backVisible ? styles.headerWithoutBack : {},
        style,
      ]}>
      {backVisible ? (
        <TouchableOpacity
          hitSlop={styles.hitSlopStyle}
          onPress={onPress}
          style={[...style, styles.backButton]}>
          <Image style={styles.backText} source={localImages.left} />
        </TouchableOpacity>
      ) : null}
      <Text style={styles.headerText}>{header}</Text>
    </View>
  );
};

export default Header;
