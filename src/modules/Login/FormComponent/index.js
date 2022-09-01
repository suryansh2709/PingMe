import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import DatePicker from 'react-native-date-picker';
import {styles} from '../style';
import localImages from '../../../utils/localImages';
import CustomTextInput from '../../../components/customTextInput/customTextInput';
import {color} from '../../../utils/colors';
import {string} from '../../../utils/strings';

const FormComponent = ({
  open,
  setOPen,
  infoDetails,
  setInfoDetails,
  onAddImagePress,
}) => {
  return (
    <React.Fragment>
      <View style={styles.profileView}>
        <TouchableOpacity
          onPress={onAddImagePress}
          style={styles.deleteIconView}
          activeOpacity={0.5}>
          <Image source={localImages.add} style={styles.deleteImage} />
        </TouchableOpacity>
        <View style={styles.profilePicView}>
          <Image
            source={{
              uri: infoDetails?.displayImage,
            }}
            style={styles.profileImage}
          />
        </View>
      </View>
      <View style={styles.textInputView}>
        <CustomTextInput
          width={335}
          color={color.lightGrey}
          style={styles.userInputStyle}
          placeholder={string.userName}
          onChangeText={text => {
            setInfoDetails({...infoDetails, userName: text});
          }}
        />
        <CustomTextInput
          width={335}
          color={color.lightGrey}
          style={styles.userInputStyle}
          placeholder={string.firstName}
          onChangeText={text => {
            setInfoDetails({...infoDetails, fName: text});
          }}
        />
        <CustomTextInput
          width={335}
          color={color.lightGrey}
          style={styles.userInputStyle}
          placeholder={string.lastName}
          onChangeText={text => {
            setInfoDetails({...infoDetails, lName: text});
          }}
        />
        <View style={styles.datePickerView}>
          <View style={styles.dateDisplayView}>
            <Text style={{color: color.darkGreen}}>
              {' '}
              {`${JSON.stringify(
                infoDetails?.date?.getDate(),
              )}/${JSON.stringify(
                infoDetails.date.getMonth() + 1,
              )}/${JSON.stringify(infoDetails.date.getFullYear() - 18)}`}
            </Text>
          </View>
          <TouchableOpacity onPress={() => setOPen(true)}>
            <Image
              source={localImages.calenderIcon}
              style={styles.calenderImage}
            />
          </TouchableOpacity>
        </View>
        <DatePicker
          mode="date"
          modal
          open={open}
          date={infoDetails.date}
          onConfirm={date => {
            setOPen(false);
            setInfoDetails({...infoDetails, date: date});
          }}
          onCancel={() => {
            setOPen(false);
          }}
        />
        <CustomTextInput
          width={335}
          color={color.lightGrey}
          style={styles.userInputStyle}
          placeholder={string.about}
          onChangeText={text => {
            setInfoDetails({...infoDetails, about: text});
          }}
        />
      </View>
    </React.Fragment>
  );
};

export default React.memo(FormComponent);
