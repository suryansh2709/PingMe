import {StyleSheet} from 'react-native';
import {normalize, vh, vw} from '../../utils/dimensions';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7fc',
    borderRadius: vh(5),
    width: '80%',
    height: normalize(36),
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  textInput: {
    color: 'black',
    marginHorizontal: vw(10),
    paddingHorizontal: vh(5),
    fontSize: vw(14),
    alignSelf: 'center',
  },
});
