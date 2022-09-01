import {StyleSheet} from 'react-native';
import {color} from '../../../../utils/colors';
import {vh, vw} from '../../../../utils/dimensions';

export const styles = StyleSheet.create({
  mainView: {flex: 1},
  homeMainView: {height: '88%'},
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
    backgroundColor: color.grey,
  },
  userChatMessage: {
    fontSize: vh(16),
    fontWeight: '400',
    color: 'rgba(119, 131, 143, 1)',
    marginTop: vh(5),
  },
  nameView: {marginLeft: vw(14), marginTop: vh(5)},
  userName: {fontSize: vh(17), fontWeight: '500'},
  chatSend: {
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -1,
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
  itemSeperatorView: {
    height: vh(1),
    backgroundColor: '#56CF83',
    width: '90%',
    alignSelf: 'center',
    opacity: 0.4,
  },
  giftedChatMainView: {flex: 1, backgroundColor: color.cream},
  messageContainerView: {
    backgroundColor: color.cream,
  },
  sendImage: {height: '90%', width: '90%', bottom: 5},
  sendButton: {height: '90%', width: '90%', bottom: 5},
  messageContainer: {
    backgroundColor: color.lightGreen,
  },
  toolTipView: {
    backgroundColor: 'red',
  },
  toolTipTextStyle: {
    color: 'black',
    fontSize: vh(20),
    alignSelf: 'center',
  },
  toolTipContainer: {
    bottom: 270,
    borderWidth: 1,
    borderColor: color.lightGreen,
  },
  tooTipContentMainView: {
    height: vh(100),
    width: vw(110),
    justifyContent: 'space-between',
    paddingVertical: vh(20),
  },
  contentLineSeperator: {
    height: vh(1),
    backgroundColor: color.lightGreen,
  },
});
