import React from 'react';
import {styles} from './style';
import {Text, View} from 'react-native';

export const HeadingView = ({bigHeader, smallHeader, style}) => {
  return (
    <View style={[styles.emailTextView, style]}>
      <Text style={styles.enterEmailText}>{bigHeader}</Text>
      <Text style={styles.confirmPhoneText}>{smallHeader}</Text>
    </View>
  );
};

export default HeadingView;
