import localImages from '../../../utils/localImages';
import {string} from '../../../utils/strings';
const tabs = [
  {
    title: string.chat,
    image: localImages.chatIcon,
    imageActive: localImages.chatActiveIcon,
    isFocused: true,
  },
  {
    title: string.status,
    image: localImages.statusIcon,
    imageActive: localImages.statusActiveIcon,
    isFocused: false,
  },
  {
    title: string.call,
    image: localImages.callIcon,
    imageActive: localImages.callActiveIcon,
    isFocused: false,
  },
  {
    title: string.setting,
    image: localImages.settingIcon,
    imageActive: localImages.settingActiveIcon,
    isFocused: false,
  },
];
export default tabs;
