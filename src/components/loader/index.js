import {ActivityIndicator} from 'react-native';
import React from 'react';
import {styles} from './style';

const Loader = ({loader}) => {
  return (
    <ActivityIndicator
      size={'large'}
      style={styles.activityIndicator}
      animating={loader}
    />
  );
};

export default Loader;
