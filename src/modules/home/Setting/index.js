/* eslint-disable react/self-closing-comp */
import {Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import localImages from '../../../utils/localImages';
import Data from './utils';
import styles from './style';

const Setting = () => {
  const [list, setList] = useState(Data);

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
        <>
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
        </>
      );
    }
  };
  return (
    <View style={styles.settingMainView}>
      <View style={styles.settingHeaderView}>
        <Text style={styles.headerText}>{'More'}</Text>
      </View>
      <View style={styles.userDataMainView}>
        <TouchableOpacity style={styles.userDataView} activeOpacity={0.6}>
          <View style={styles.userNameView}>
            <Image source={localImages.user} style={styles.userImageStyle} />
            <View style={styles.userNameText}>
              <Text style={styles.userNameTextStyle}>{'Shubhankar'}</Text>
              <Text style={styles.userNamePhoneStyle}>{'1234567890'}</Text>
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
