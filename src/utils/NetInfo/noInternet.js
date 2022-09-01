import React from 'react';
import {normalize} from '../dimensions';
import localImages from '../localImages';
import {Image, StyleSheet, View} from 'react-native';

const NoInternet = () => {
  return (
    <View style={styles.contentContainer}>
      <Image source={localImages.noInternet} style={styles.imageStyle} />
    </View>
  );
};

export default NoInternet;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 0.5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: normalize(30),
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
});
