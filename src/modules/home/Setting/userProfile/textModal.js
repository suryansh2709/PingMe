import React, {useState} from 'react';
import {
  Alert,
  Modal,
  Text,
  Pressable,
  View,
  StyleSheet,
  TextInput,
} from 'react-native';
import {color} from '../../../../utils/colors';
import {vh, vw} from '../../../../utils/dimensions';
export default function TextModal({
  modalVisible,
  setModalVisible,
  changing,
  caller,
  handleNameChange,
  handleAboutChange,
}) {
  const [change, setChange] = useState(changing);

  const handelModal = () => {
    if (caller === 'Name') {
      handleNameChange(change);
    } else {
      handleAboutChange(change);
    }
    setModalVisible(!modalVisible);
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.inputView}>
            <TextInput maxLength={20} onChangeText={text => setChange(text)} />
          </View>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={handelModal}>
            <Text style={styles.textStyle}>Save</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    margin: 20,
    padding: 25,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    width: vw(100),
    marginTop: vh(20),
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  inputView: {
    height: vh(40),
    width: '100%',
    justifyContent: 'center',
    paddingLeft: vw(10),
    backgroundColor: color.lightGrey,
    borderRadius: 10,
  },
});
