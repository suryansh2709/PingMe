import firestore from '@react-native-firebase/firestore';
import {string} from '../../../../../utils/strings';

export const handleClearChat = async (loggedInUser, docId) => {
  const delivered = await firestore()
    .collection(string.homeChatRoom)
    .doc(docId)
    .collection('messages')
    .get();
  const batch = firestore()?.batch();
  delivered.forEach(documentSnapshot => {
    if (documentSnapshot._data.sentTo === loggedInUser?.uid) {
      batch.update(documentSnapshot.ref, {received: true});
    }
  });
};

export const handleDeliverdStatus = async (loggedInUser, docId) => {
  const delivered = await firestore()
    .collection(string.homeChatRoom)
    .doc(docId)
    .collection('messages')
    .get();
  const batch = firestore()?.batch();
  delivered.forEach(documentSnapshot => {
    if (documentSnapshot._data.sentTo === loggedInUser?.uid) {
      batch.update(documentSnapshot.ref, {received: true});
    }
  });
  return batch.commit();
};

export const createRoom = (docId, loggedInUser, succesCallback) => {
  firestore()
    .collection(string.homeChatRoom)
    .doc(docId)
    .collection(string.messages)
    .onSnapshot(doc => {
      handleDeliverdStatus(loggedInUser, docId);
      const dataArray = doc?._docs.map(element => element._data);
      dataArray.sort((a, b) => b.createdAt - a.createdAt);
      let newmsgs = dataArray.filter(item => {
        if (item?.deletedForEveryOne) {
          return false;
        } else if (item?.deletedBy) {
          return item?.deletedBy !== loggedInUser?.uid;
        } else {
          return true;
        }
      });
      succesCallback(newmsgs);
    });
};
