import {Text, View, FlatList, Image} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {styles} from './style';
import CustomTextInput from '../customTextInput/customTextInput';
import {countryCodes} from './utils/phoneData';
import CountryCodeRender from './countryCodeRender';
import localImages from '../../utils/localImages';
import {string} from '../../utils/strings';
import {color} from '../../utils/colors';

const CountryCodeModal = ({
  selected,
  isVisible,
  setSelected,
  hanldeCountryCodeOnPress,
}) => {
  const [searchText, setSearchText] = useState('');

  const itemSeperator = () => <View style={styles.itemSeprator} />;

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
        <Text style={styles.countryModalHeader}>{string.selectCode}</Text>
        <View style={styles.searchView}>
          <Image source={localImages.search} style={styles.search} />
          <CustomTextInput
            width={247}
            onChangeText={onChangeText}
            placeholder={string.selectCode}
            color={color.darkGrey}
          />
        </View>
        <FlatList
          data={filteredData()}
          renderItem={renderItem}
          ItemSeparatorComponent={itemSeperator}
          keyExtractor={_keyExtractor}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Modal>
  );
};

export default React.memo(CountryCodeModal);
