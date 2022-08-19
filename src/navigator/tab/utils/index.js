import localImages from '../../../utils/localImages';
const tabs = [
  {
    title: 'Chat',
    image: localImages.chatIcon,
    imageActive: localImages.chatActiveIcon,
    isFocused: true,
  },
  {
    title: 'Status',
    image: localImages.statusIcon,
    imageActive: localImages.statusActiveIcon,
    isFocused: false,
  },
  {
    title: 'Call',
    image: localImages.callIcon,
    imageActive: localImages.callActiveIcon,
    isFocused: false,
  },
  {
    title: 'Setting',
    image: localImages.settingIcon,
    imageActive: localImages.settingActiveIcon,
    isFocused: false,
  },
];
export default tabs;
