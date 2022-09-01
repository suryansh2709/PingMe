import {StyleSheet} from 'react-native';
import {color} from '../../../utils/colors';
import {normalize} from '../../../utils/dimensions';

export const styles = StyleSheet.create({
  resendCodeView: {marginTop: normalize(62), alignSelf: 'center'},
  resendCodeText: {color: 'rgba(88, 213, 130, 1)'},
  inactiveReset: {
    color: '#808080',
  },
  timer: {
    color: color.red,
    textAlign: 'center',
  },
});
