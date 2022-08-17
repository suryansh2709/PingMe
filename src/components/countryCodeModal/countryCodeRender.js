import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {normalize, vw} from '../../utils/dimensions';
import {color} from '../../utils/colors';
import localImages from '../../utils/localImages';

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
        <Image source={localImages.check} style={styles.check} />
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
  check: {
    height: vw(24),
    width: vw(24),
    marginTop: normalize(6),
    marginRight: normalize(10),
  },
});
