import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
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
  viewStyle: {width: '80%', height: 200},
});

export default styles;
