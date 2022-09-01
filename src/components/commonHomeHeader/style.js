import {StyleSheet} from 'react-native';
import {color} from '../../utils/colors';
import {vh, vw} from '../../utils/dimensions';

export const styles = StyleSheet.create({
  headerIconImage: {
    height: vh(20),
    width: vh(20),
    tintColor: color.white,
  },
  headerMainView: {
    height: vh(83),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#50BF87',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  iconImageView: {
    flexDirection: 'row',
    width: vw(98),
    height: vh(24),
    justifyContent: 'space-around',
    marginRight: vw(13),
  },
});
