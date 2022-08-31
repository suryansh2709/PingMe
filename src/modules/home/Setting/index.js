/* eslint-disable react/self-closing-comp */
import {Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import localImages from '../../../utils/localImages';
import Data from './utils';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {vh} from '../../../utils/dimensions';
import {color} from '../../../utils/colors';

const Setting = () => {
  const {loggedInUser} = useSelector(store => store.userDataReducer);
  const navigation = useNavigation();
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
        <Text style={styles.headerText}>{'More'}</Text>
      </View>
      <View style={styles.userDataMainView}>
        <TouchableOpacity
          style={styles.userDataView}
          activeOpacity={0.6}
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <View style={styles.userNameView}>
            <View style={styles.userImageView}>
              <Image
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
