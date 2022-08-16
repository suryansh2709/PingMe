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
    marginTop,
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
        {marginTop: marginTop},
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
    borderRadius: 30,
    justifyContent: 'center',
    borderWidth: normalize(1),
    marginLeft: normalize(28),
  },
  buttonText: {
    fontSize: normalize(14),
    lineHeight: normalize(30),
    textAlign: 'center',
  },
});
