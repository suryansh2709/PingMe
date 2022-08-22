import {vh, vw} from '../../../utils/dimensions';

const styles = {
  settingMainView: {flex: 1},
  settingHeaderView: {flex: 0.11},
  headerText: {
    marginTop: vh(47),
    marginLeft: vw(24),
    color: 'rgba(88, 213, 130, 1)',
    fontSize: vh(18),
  },
  userDataMainView: {flex: 0.61, paddingHorizontal: vh(16)},
  userDataView: {
    flex: 0.13,
    marginTop: vh(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userNameView: {
    width: vw(204),
    height: vh(50),
    alignItems: 'center',
    flexDirection: 'row',
  },
  arrowIconImage: {
    height: vh(24),
    width: vh(24),
    position: 'absolute',
    right: 10,
    top: -10,
  },
  userImageStyle: {
    height: vh(48),
    width: vh(48),
    borderRadius: 50,
  },
  userNameText: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: vh(38),
    marginLeft: vw(16),
  },
  itemTextView: {flexDirection: 'row'},
  itemIconStyle: {height: vh(22), width: vh(22)},
  itemTitle: {marginLeft: vw(10), fontSize: vh(15)},
  nextIconStyle: {height: vh(24), width: vh(24), marginRight: vw(8)},
  secondMainView: {flex: 0.85},
  normalRenderView: {
    flexDirection: 'row',
    height: vh(40),
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: vh(8),
  },
  itemAppearanceView: {
    flexDirection: 'row',
    height: vh(40),
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: vh(24),
  },
  itemSeperatorView: {
    height: vh(1),
    backgroundColor: 'rgba(237, 237, 237, 1)',
    marginTop: vh(8),
  },
  itemHelpView: {
    flexDirection: 'row',
    height: vh(40),
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: vh(8),
  },
  userNameTextStyle: {color: '#0F1828', fontSize: vh(14)},
  userNamePhoneStyle: {color: '#ADB5BD', fontSize: vh(13)},
};

export default styles;
