import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from 'react-redux'
import { gray } from '../utils/colors'

class CardDeck extends Component {



  render() {
    const {deck} = this.props

    return (
      <View style={styles.container}>
        <Text style={{fontSize: 35}}>
          {deck.title}
        </Text>
        <Text style={{color: gray, fontSize: 20}}>{deck.questions.length} cards</Text>
      </View>
    );
  }
}

const styles  = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

function mapStateToProps(state, { navigation }) {

  const {deckId} = navigation.state.params

  return {
    deck: state[deckId]
  }
}

export default connect(mapStateToProps)(CardDeck)
