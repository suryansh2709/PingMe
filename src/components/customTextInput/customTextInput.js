import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {vw, vh, normalize} from '../../utils/dimensions';

export default function CustomTextInput(props) {
  const {width = 375} = props;
  return (
    <View
      style={[
        styles.container,
        props.hasOwnProperty('width')
          ? {width: vw(width), backgroundColor: props.color}
          : {},
        props.style,
      ]}>
      <TextInput
        value={props.value}
        onChangeText={props.onChangeText}
        maxLength={props.maxLength}
        keyboardType={props?.keyboardType}
        placeholder={props.placeholder}
        style={[styles.textInput, {width: vw(width)}]}
        secureTextEntry={props.secureTextEntry}
        autoCorrect={false}
        onBlur={props.onBlur}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7fc',
    borderRadius: vh(5),
    width: '80%',
    height: normalize(36),
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  textInput: {
    color: 'black',
    marginHorizontal: vw(10),
    paddingHorizontal: vh(5),
    fontSize: vw(14),
    alignSelf: 'center',
  },
});
