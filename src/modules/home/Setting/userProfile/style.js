import {StyleSheet} from 'react-native';
import {color} from '../../../../utils/colors';
import {vh, vw} from '../../../../utils/dimensions';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: 'white',
  },
  profileView: {
    justifyContent: 'flex-end',
    paddingHorizontal: vw(25),
    alignSelf: 'center',
  },
  deleteIconView: {
    height: vh(30),
    width: vh(30),
    backgroundColor: color.white,
    padding: 2,
    position: 'absolute',
    borderRadius: 40,
    right: 35,
    zIndex: 1,
    bottom: 0,
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
    marginLeft: vw(30),
  },
  profileDataName: {marginBottom: vh(8), fontSize: vh(15), fontWeight: '500'},
  editDataView: {
    height: vh(40),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: color.lightGrey,
    borderRadius: 10,
    width: '100%',
  },
  dataText: {fontSize: vh(14), fontStyle: 'italic', marginLeft: vw(5)},
  pencilImageData: {height: vh(15), width: vh(15), marginRight: vw(10)},
  pencilImageStyle: {height: '90%', width: '90%'},
});
