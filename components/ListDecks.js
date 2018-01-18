import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { gray, black } from '../utils/colors'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'

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

  componentDidMount() {
    this.props.dispatch(receiveDecks())
    console.log(this.props.decks)
  }

  renderItem = ({ item }) => {
    return <Deck {...item} />
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
      decks: Object.keys(state).filter(deck => state[deck]).map(deck => ({
        title: state[deck].title,
        noOfCards: state[deck].questions.length
      }))
    }
}

// function mapStateToProps(state) {
//   return {
//     decks: Object.keys(state).map(deck => ({
//       title: state[deck]
//               ? state[deck].title
//               : '',
//       noOfCards: state[deck]
//                 ? state[deck].questions.length
//                 : []
//     }))
//   }
// }

export default connect(mapStateToProps)(ListDecks)
