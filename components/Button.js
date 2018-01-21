import React from 'react'
import { Text, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import { black, white } from '../utils/colors'

export default function Btn ({ onPress, text, backgroundColor, textColor }) {
  return (
    <TouchableOpacity
      style={[Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn, (backgroundColor && {backgroundColor: backgroundColor})]}
      onPress={onPress}>
        <Text style={[styles.submitBtnText, (textColor && {color: textColor})]}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  iosSubmitBtn: {
    backgroundColor: black,
    padding: 12,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 50
  },
  AndroidSubmitBtn: {
    backgroundColor: black,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  }
})
