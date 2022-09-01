/* eslint-disable react/self-closing-comp */
import Data from './utils';
import styles from './style';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {string} from '../../../utils/strings';
import FastImage from 'react-native-fast-image';
import localImages from '../../../utils/localImages';
import {useNavigation} from '@react-navigation/native';
import {Text, View, Image, TouchableOpacity, FlatList} from 'react-native';

const Setting = () => {
  const navigation = useNavigation();
  const [list, setList] = useState(Data);
  const {loggedInUser} = useSelector(store => store.userDataReducer);

  const onRender = ({item}) => {
    if (item?.id < 3 || (item?.id > 3 && item?.id < 7) || item?.id > 7) {
      return (
        <TouchableOpacity style={styles.normalRenderView} activeOpacity={0.4}>
          <View style={styles.itemTextView}>
            <Image source={item?.icon} style={styles.itemIconStyle} />
            <Text style={styles.itemTitle}>{item?.title}</Text>
          </View>
          <TouchableOpacity>
            <Image source={localImages.nextIcon} style={styles.nextIconStyle} />
          </TouchableOpacity>
        </TouchableOpacity>
      );
    } else if (item?.id === '3') {
      return (
        <TouchableOpacity style={styles.itemAppearanceView} activeOpacity={0.4}>
          <View style={styles.itemTextView}>
            <Image source={item?.icon} style={styles.itemIconStyle} />
            <Text style={styles.itemTitle}>{item?.title}</Text>
          </View>
          <TouchableOpacity>
            <Image source={localImages.nextIcon} style={styles.nextIconStyle} />
          </TouchableOpacity>
        </TouchableOpacity>
      );
    } else if (item?.id === '7') {
      return (
        <React.Fragment>
          <View style={styles.itemSeperatorView}></View>
          <TouchableOpacity style={styles.itemHelpView} activeOpacity={0.4}>
            <View style={styles.itemTextView}>
              <Image source={item?.icon} style={styles.itemIconStyle} />
              <Text style={styles.itemTitle}>{item?.title}</Text>
            </View>
            <TouchableOpacity>
              <Image
                source={localImages.nextIcon}
                style={styles.nextIconStyle}
              />
            </TouchableOpacity>
          </TouchableOpacity>
        </React.Fragment>
      );
    }
  };
  return (
    <View style={styles.settingMainView}>
      <View style={styles.settingHeaderView}>
        <Text style={styles.headerText}>{string.more}</Text>
      </View>
      <View style={styles.userDataMainView}>
        <TouchableOpacity
          style={styles.userDataView}
          activeOpacity={0.6}
          onPress={() => {
            navigation.navigate(string.profile);
          }}>
          <View style={styles.userNameView}>
            <View style={styles.userImageView}>
              <FastImage
                source={{uri: loggedInUser.displayImage}}
                style={styles.userImageStyle}
              />
            </View>
            <View style={styles.userNameText}>
              <Text style={styles.userNameTextStyle}>{loggedInUser.fName}</Text>
              <Text style={styles.userNamePhoneStyle}>
                {loggedInUser.phoneNumber}
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <Image
              source={localImages.nextIcon}
              style={styles.arrowIconImage}
            />
          </TouchableOpacity>
        </TouchableOpacity>
        <View style={styles.secondMainView}>
          <FlatList
            data={list}
            renderItem={onRender}
            showsVerticalScrollIndicator={false}
            bounces={false}
          />
        </View>
      </View>
    </View>
  );
};

export default Setting;
