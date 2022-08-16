import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {vw} from '../../utils/dimensions';
import {color} from '../../utils/colors';

const CountryCodeRender = ({
  code,
  country,
  selected,
  onChangeText,
  selectionCallback,
  hanldeCountryCodeOnPress,
}) => {
  const onPressHandle = () => {
    selectionCallback(code);
    hanldeCountryCodeOnPress(false);
    onChangeText('');
  };

  return (
    <TouchableOpacity style={styles.eachView} onPress={onPressHandle}>
      <Text style={selected === code ? styles.activecountry : styles.country}>
        {country.toUpperCase() + '  +' + code}
      </Text>
      {selected === code ? (
        // <Image source={localImages.check} style={styles.check} />
        <Text>fgh</Text>
      ) : null}
    </TouchableOpacity>
  );
};

export default CountryCodeRender;

const styles = StyleSheet.create({
  eachView: {
    height: vw(60),
    alignItems: 'center',
    flexDirection: 'row',
    fontSize: vw(13),
    justifyContent: 'space-between',
  },
  activecountry: {
    color: color.black,
    fontWeight: '600',
    fontSize: vw(13),
  },
  country: {
    color: color.black,
    fontSize: vw(13),
  },
  check: {height: vw(20), width: vw(20)},
});
