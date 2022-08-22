import {StyleSheet, Text, View} from 'react-native';

import React from 'react';
import {styles} from './style';

export const HeadingView = ({bigHeader, smallHeader}) => {
  return (
    <View style={styles.emailTextView}>
      <Text style={styles.enterEmailText}>{bigHeader}</Text>
      <Text style={styles.confirmPhoneText}>{smallHeader}</Text>
    </View>
  );
};

export default HeadingView;
