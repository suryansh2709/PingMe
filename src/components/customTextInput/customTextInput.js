import {TextInput, View} from 'react-native';
import React from 'react';
import {vh, vw} from '../../utils/dimensions';
import {styles} from './style';

function CustomTextInput(props) {
  const {width = 375} = props;
  return (
    <View
      style={[
        styles.container,
        props.hasOwnProperty('width')
          ? {
              width: vw(width),
              backgroundColor: props.color,
            }
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

export default React.memo(CustomTextInput);
