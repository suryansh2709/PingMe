import {TouchableOpacity, Image} from 'react-native';
import React from 'react';

const IconButton = props => {
  return (
    <TouchableOpacity
      hitSlop={{top: 2, bottom: 2, right: 2, left: 2}}
      onPress={props?.onPress}
      style={props.imageStyle}>
      <Image source={props?.image} style={props.imageStyle} />
    </TouchableOpacity>
  );
};

export default React.memo(IconButton);
