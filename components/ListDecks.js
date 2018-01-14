import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { gray, black } from '../utils/colors'


function Deck ({ title, noOfCards }) {
  return (
    <View style={styles.deck}>
      <Text style={{fontSize: 20}}>{title}</Text>
      <Text style={{color: gray}}>{noOfCards} cards</Text>
    </View>
   )
}


class ListDecks extends Component {
  render() {
    return (
      <View>
        <Deck title='Voila' noOfCards={4}/>
        <Deck title='Shoo' noOfCards={2}/>
        <Deck title='Aha!' noOfCards={1}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deck: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    padding: 20,
    borderBottomColor: black,
    borderBottomWidth: 1,
  }
})

export default ListDecks
