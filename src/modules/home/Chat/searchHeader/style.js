import {StyleSheet} from 'react-native';
import {vh, vw} from '../../../../utils/dimensions';

export const styles = StyleSheet.create({
  searchLeftIcon: {
    height: vh(25),
    width: vh(25),
    top: 2,
  },
  headerMainView: {
    height: vh(83),
    backgroundColor: '#50BF87',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
  },
  searchMainView: {
    flexDirection: 'row',
  },
  textInputStyle: {marginLeft: vw(8), width: '80%', padding: 8},
});
