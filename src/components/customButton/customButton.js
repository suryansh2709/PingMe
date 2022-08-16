import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {normalize} from '../../utils/dimensions';

export default function CustomButton(props) {
  const {
    textColor,
    bgColor,
    text,
    onPressButton,
    disable = false,
    borderColor,
    width,
  } = props;
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: disable ? props?.disableColor : bgColor,
          borderColor: borderColor,
        },
        {width: width},
      ]}
      activeOpacity={0.8}
      onPress={() => onPressButton()}
      disabled={disable}>
      <Text style={{...styles.buttonText, color: textColor}}>{text}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    height: normalize(42),
    marginTop: normalize(16),
    borderRadius: 8,
    justifyContent: 'center',
    borderWidth: normalize(1),
  },
  buttonText: {
    fontSize: normalize(14),
    lineHeight: normalize(30),
    textAlign: 'center',
  },
});
