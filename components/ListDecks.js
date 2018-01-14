import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { gray, black } from '../utils/colors'


function Deck ({ title, noOfCards }) {
  return (
    <TouchableOpacity>
      <View style={styles.deck}>
        <Text style={{fontSize: 20}}>{title}</Text>
        <Text style={{color: gray}}>{noOfCards} cards</Text>
      </View>
    </TouchableOpacity>
   )
}


class ListDecks extends Component {

  renderItem = ({ item }) => {
    return <Deck {...item} />
  }

  render() {
    return (
      <View>
        <FlatList
          data={[{title: 'Voila', noOfCards: 3},{title: 'Shoo', noOfCards:2}, {title: 'Aha!', noOfCards: 5}]}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index}
        />
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
