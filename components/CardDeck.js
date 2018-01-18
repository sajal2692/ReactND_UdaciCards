import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from 'react-redux'

class CardDeck extends Component {
  render() {

    const {deck} = this.props

    return (
      <View style={styles.container}>
        <Text style={{fontSize: 20}}>
          {deck.title}
        </Text>
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
