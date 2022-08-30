import {SafeAreaView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import ContactHeader from './contactListHeader';

export default function AddFriend() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ContactHeader />
    </SafeAreaView>
  );
}
