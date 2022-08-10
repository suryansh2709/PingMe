import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OTPInputView from '@twotalltotems/react-native-otp-input'


const OtpComponent = () => {
  return (
    <View style = {{marginTop : 40}}>
      <OTPInputView />
    </View>
  )
}

export default OtpComponent

const styles = StyleSheet.create({})