import {StyleSheet} from 'react-native';
import {color} from '../../utils/colors';
import {vh, vw, normalize} from '../../utils/dimensions';

const styles = StyleSheet.create({
  tabView: {
    height: vh(70),
    borderRadius: normalize(20),
    bottom: 0,
    flexDirection: 'row',
    marginTop: vh(100),
    marginHorizontal: vw(10),
    backgroundColor: 'rgba(2,34,36,0.1)',
  },
  homeTabView: {
    height: vh(56),
    width: vw(88),
    alignItems: 'center',
  },
  tabText: {
    alignSelf: 'center',
    marginTop: vh(3),
    color: '#77838F',
    fontWeight: '500',
  },
  tabActiveText: {
    alignSelf: 'center',
    marginTop: vh(3),
    color: '#4FBC87',
    fontWeight: '600',
    fontSize: vh(15),
  },
  iconImageStyle: {
    height: vh(24),
    width: vh(24),
    marginTop: vh(16),
  },
  iconImageActiveStyle: {
    height: vh(24),
    width: vh(24),
    marginTop: vh(16),
    tintColor: '#4FBC87',
  },
});

export default styles;
