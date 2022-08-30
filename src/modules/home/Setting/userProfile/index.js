import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import localImages from '../../../../utils/localImages';
import {vh, vw} from '../../../../utils/dimensions';
import {color} from '../../../../utils/colors';

export default function Profile({modalVisible, setModalVisible}) {
  return (
    <Modal
      style={{}}
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.profileView}>
            <TouchableOpacity style={styles.deleteIconView} activeOpacity={0.5}>
              <Image source={localImages.add} style={styles.deleteImage} />
            </TouchableOpacity>
            <View style={styles.profilePicView}>
              <Image source={localImages.user} style={styles.profileImage} />
            </View>
          </View>
          <View style={styles.inputModalView}>
            <Text style={{marginBottom: vh(8)}}>{'Name'}</Text>
          </View>
          <View style={styles.inputModalView}>
            <Text style={{marginBottom: vh(8)}}>{'Name'}</Text>
          </View>
          <View style={styles.inputModalView}>
            <Text style={{marginBottom: vh(8)}}>{'First Name'}</Text>
          </View>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {marginTop: vh(25)},
  modalView: {
    margin: 15,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  profileView: {
    justifyContent: 'flex-end',
    paddingHorizontal: vw(25),
  },
  deleteIconView: {
    height: vh(30),
    width: vh(30),
    backgroundColor: color.white,
    padding: 2,
    position: 'absolute',
    borderRadius: 40,
    right: 40,
    zIndex: 1,
    bottom: 10,
  },
  deleteImage: {zIndex: 1, height: '100%', width: '100%'},
  profilePicView: {
    overflow: 'hidden',
    height: vh(120),
    width: vh(120),
    alignSelf: 'center',
    borderRadius: 90,
    backgroundColor: color.grey,
  },
  profileImage: {height: '100%', width: '100%'},
  inputModalView: {
    height: vh(60),
    width: vw(300),
    marginTop: vh(25),
    borderWidth: 1,
  },
});
