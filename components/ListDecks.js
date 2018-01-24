import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { gray, black } from '../utils/colors'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'
//
// function Deck ({ title, noOfCards}, navigation) {
//   return (
//     <TouchableOpacity
//       onPress={() => navigation.navigate(
//         'CardDeck',
//         { deckId: title }
//       )}>
//       <View style={styles.deck}>
//         <Text style={{fontSize: 20}}>{title}</Text>
//         <Text style={{color: gray}}>{noOfCards} cards</Text>
//       </View>
//     </TouchableOpacity>
//    )
// }


class ListDecks extends Component {

  componentDidMount() {
    this.props.dispatch(receiveDecks())
  }

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate(
          'CardDeck',
          { deckId: item.title }
        )}>
        <View style={styles.deck}>
          <Text style={{fontSize: 20}}>{item.title}</Text>
          <Text style={{color: gray}}>{item.noOfCards} {item.noOfCards === 1 ? (<Text>card</Text>): (<Text>cards</Text>)}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.props.decks}
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

function mapStateToProps(state) {
    return {
      decks: Object.keys(state).filter(deck => state[deck] && deck!='_persist').map(deck => ({
        title: state[deck].title,
        noOfCards: state[deck].questions ? state[deck].questions.length : 0
      }))
    }
}

export default connect(mapStateToProps)(ListDecks)
