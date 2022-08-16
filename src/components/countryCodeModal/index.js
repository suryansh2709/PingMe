import {Image, Text, View} from 'react-native';
import React, {useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import {styles} from './style';
import {countryCodes} from '../../../utils/phoneData';
import CountryCodeRender from './countryCodeRender';
import CustomTextInput from '../../customComponents/customTextInput';
import localImages from '../../../utils/localImages';
import {localStrings} from '../../../utils/localStrings';

const CountryCodeModal = ({
  selected,
  isVisible,
  hanldeCountryCodeOnPress,
  setSelected,
}) => {
  const [searchText, setSearchText] = useState('');

  const itemSeperator = () => <View style={styles.itemSeprator}></View>;

  const onChangeText = txt => {
    setSearchText(txt);
  };

  const selectionCallback = item => {
    setSelected(item);
  };

  const filteredData = () => {
    let newData = countryCodes.filter(item => {
      return item.country.toLowerCase().includes(searchText.toLowerCase());
    });
    return newData;
  };

  const renderItem = ({item, index}) => {
    const {country, code} = item;
    return (
      <CountryCodeRender
        code={code}
        country={country}
        selected={selected}
        onChangeText={onChangeText}
        selectionCallback={selectionCallback}
        hanldeCountryCodeOnPress={hanldeCountryCodeOnPress}
      />
    );
  };

  const _keyExtractor = item => {
    return item.code;
  };

  return (
    <Modal
      onBackButtonPress={hanldeCountryCodeOnPress}
      isVisible={isVisible}
      onBackdropPress={hanldeCountryCodeOnPress}
      style={styles.delModal}>
      <View style={[styles.delModalView, styles.countryCodeModal]}>
        <Text style={styles.countryModalHeader}>{localStrings.selectCode}</Text>
        <View style={styles.searchView}>
          <Image source={localImages.search} style={styles.search} />
          <CustomTextInput
            onChangeText={onChangeText}
            placeholder={localStrings.selectCode}
          />
        </View>
        <FlatList
          data={filteredData()}
          renderItem={renderItem}
          ItemSeparatorComponent={itemSeperator}
          keyExtractor={_keyExtractor}
        />
      </View>
    </Modal>
  );
};

export default CountryCodeModal;
