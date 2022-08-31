import {StyleSheet} from 'react-native';
import {color} from '../../../../utils/colors';
import {vh, vw} from '../../../../utils/dimensions';

export const styles = StyleSheet.create({
  giftedChatMainView: {flex: 1, backgroundColor: color.cream},
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
  toolTipTextStyle: {
    color: 'black',
    fontSize: vh(14),
    alignSelf: 'center',
    lineHeight: 35,
  },
  toolTipContainer: {
    bottom: 295,
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
});
