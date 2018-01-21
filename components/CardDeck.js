import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from 'react-redux'
import { gray } from '../utils/colors'
import Btn from './Button'
import { black, white } from '../utils/colors'

class CardDeck extends Component {



  render() {
    const {deck} = this.props

    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={{fontSize: 35}}>
            {deck.title}
          </Text>
          <Text style={{color: gray, fontSize: 20}}>{deck.questions.length} cards</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Btn
            text="Add Card"
            backgroundColor={white}
            textColor={black}
          />
          <Btn
            text="Start Quiz"
            backgroundColor={black}
            textColor={white}
          />
        </View>
      </View>
    );
  }
}

const styles  = StyleSheet.create({
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'space-around'
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-start'
  }
})

function mapStateToProps(state, { navigation }) {

  const {deckId} = navigation.state.params

  return {
    deck: state[deckId]
  }
}

export default connect(mapStateToProps)(CardDeck)
