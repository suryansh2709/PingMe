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
  chatInputViewStyle: {
    height: vh(40),
    marginHorizontal: vw(15),
    borderRadius: 22,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.46,

    elevation: 9,
    paddingLeft: vw(10),
    paddingTop: vh(5),
  },
});
