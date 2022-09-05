import {StyleSheet} from 'react-native';
import {color} from '../../../../utils/colors';
import {normalize, vh, vw} from '../../../../utils/dimensions';

export const styles = StyleSheet.create({
  giftedChatMainView: {flex: 1, backgroundColor: color.cream},
  chatInputViewStyle: {
    height: vh(40),
    marginHorizontal: vw(15),
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: vw(10),
    marginBottom: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 35,
  },
  toolTipTextStyle: {
    color: 'black',
    fontSize: vh(14),
    alignSelf: 'center',
    lineHeight: 35,
  },
  toolTipContainer: {
    left: 95,
    top: 35,
    borderWidth: 1,
    borderColor: color.lightGreen,
  },
  tooTipContentMainView: {
    height: vh(70),
    width: vw(100),
  },
  contentLineSeperator: {
    height: vh(1),
    backgroundColor: color.lightGreen,
  },
  messageContainerView: {
    backgroundColor: color.cream,
  },
  unblock: {
    textAlign: 'center',
    fontSize: normalize(22),
    fontWeight: '800',
  },
});
