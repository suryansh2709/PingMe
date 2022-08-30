import {StyleSheet} from 'react-native';
import {vh, vw} from '../../../../../utils/dimensions';
import {color} from '../../../../../utils/colors';

export const styles = StyleSheet.create({
  headerMainView: {
    height: vh(75),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#50BF87',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
