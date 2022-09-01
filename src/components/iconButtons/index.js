import {TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './style';

const IconButton = props => {
  return (
    <TouchableOpacity
      hitSlop={styles.hitSlopStyle}
      onPress={props?.onPress}
      style={props.imageStyle}>
      <Image source={props?.image} style={props.imageStyle} />
    </TouchableOpacity>
  );
};

export default IconButton;
