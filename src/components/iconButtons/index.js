import {TouchableOpacity, Image} from 'react-native';
import React from 'react';

const IconButton = props => {
  return (
    <TouchableOpacity
      hitSlop={{top: 5, bottom: 5, right: 5, left: 5}}
      onPress={props?.onPress}
      style={props.imageStyle}>
      <Image source={props?.image} style={props.imageStyle} />
    </TouchableOpacity>
  );
};

export default React.memo(IconButton);
