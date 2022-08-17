import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  otpViewStyle: {
    width: '75%',
    alignSelf: 'center',
    height: '20%',
  },

  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    color: 'black',
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
  viewStyle: {width: '75%', height: 200},
});

export default styles;
