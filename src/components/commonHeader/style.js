import {StyleSheet} from 'react-native';
import {color} from '../../utils/colors';
import {normalize, vh, vw} from '../../utils/dimensions';

const styles = StyleSheet.create({
  headerMain: {
    width: '100%',
    height: normalize(50),
    backgroundColor: color.white,
    marginTop: normalize(40),
    flexDirection: 'row',
  },
  backButton: {
    height: normalize(20),
    width: normalize(16),
    marginLeft: normalize(24),
  },
  backText: {
    height: '100%',
    width: '100%',
  },
  headerText: {fontSize: vh(17), marginLeft: vw(10), fontWeight: 'bold'},
  headerWithoutBack: {alignItems: 'center', justifyContent: 'center'},
});

export default styles;
