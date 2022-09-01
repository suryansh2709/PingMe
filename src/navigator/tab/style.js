import {StyleSheet} from 'react-native';
import {vh, vw, normalize} from '../../utils/dimensions';

const styles = StyleSheet.create({
  tabView: {
    height: vh(70),
    borderRadius: normalize(20),
    flexDirection: 'row',
    marginHorizontal: vw(10),
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    bottom: '4%',
    position: 'absolute',
    alignSelf: 'center',
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
    height: vh(28),
    width: vh(28),
    marginTop: vh(16),
    tintColor: '#4FBC87',
  },
});

export default styles;
