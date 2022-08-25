import {StyleSheet} from 'react-native';
import {vh, vw} from '../../../../utils/dimensions';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {color} from '../../../../utils/colors';

export const styles = StyleSheet.create({
  headerView: {
    height: vh(60),
    position: 'absolute',
    zIndex: 1,
    elevation: 1,
    width: '100%',
    marginTop: getStatusBarHeight(),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nameMainView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: vw(238),
  },
  userProfile: {
    height: vh(40),
    width: vh(40),
    borderRadius: 40,
    marginLeft: vw(14),
  },
  activeNameView: {
    marginLeft: vw(16),
    justifyContent: 'space-between',
    height: vh(39),
  },
  nameText: {
    fontSize: vh(16),
    color: color.white,
    fontStyle: 'italic',
    fontWeight: '500',
  },
  activeText: {
    fontSize: vh(12),
    color: color.white,
    fontStyle: 'italic',
  },
  headerIconImage: {height: vh(20), width: vh(20), tintColor: color.white},
  headerVideoIconImage: {height: vh(22), width: vh(22), tintColor: color.white},
  iconImageView: {
    flexDirection: 'row',
    width: vw(98),
    height: vh(24),
    justifyContent: 'space-around',
    marginRight: vw(13),
  },
});
