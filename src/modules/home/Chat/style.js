import {StyleSheet} from 'react-native';
import {vh, vw} from '../../../utils/dimensions';

export const styles = StyleSheet.create({
  homeMainView: {flex: 1},
  homeChatMainView: {
    flexDirection: 'row',
    height: vh(68),
    marginTop: vh(5),
    marginHorizontal: vw(16),
  },
  chatUserImage: {
    overflow: 'hidden',
    height: vh(60),
    width: vh(60),
    borderRadius: 100,
  },
  userChatMessage: {
    fontSize: vh(16),
    fontWeight: '400',
    color: 'rgba(119, 131, 143, 1)',
    marginTop: vh(5),
  },
  nameView: {marginLeft: vw(14), marginTop: vh(5)},
  userName: {fontSize: vh(16), fontWeight: '400'},
  chatSend: {
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
