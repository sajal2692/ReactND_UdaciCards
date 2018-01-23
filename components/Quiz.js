import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from 'react-redux'
import { gray } from '../utils/colors'
import Btn from './Button'
import { black, white, red, green, blue } from '../utils/colors'

class Quiz extends Component {

  state = {
    currentView: 'question',
    cardNo: 0,
    score: 0
  }


  next = (addScore) => {
    this.setState((state) => {
      return {
        currentView: 'question',
        cardNo: state.cardNo + 1,
        score: state.score + addScore
      }
    })
  }

  flip = () => {
    this.setState((state) => {
      const {currentView} = this.state

      return {
        ...state,
        currentView: currentView === 'question' ? 'answer' : 'question'
      }
    })
  }

  render() {
    const {deck} = this.props
    const {currentView, cardNo, score } = this.state


    return (
      <View style={{flex: 1}}>
        { (cardNo === deck.questions.length)
        ? (
          <View style={styles.container}>
            <Text style={{fontSize: 35}}>
              Score: {((score*100)/deck.questions.length).toFixed(2)} %
            </Text>
          </View>
        )
        : (
          <View style={styles.container}>
          <View style={styles.textContainer}>
            {currentView === 'question'
            ? (
              <Text style={{fontSize: 25}}>
                {deck.questions[cardNo].question}
              </Text>
            )
            : (
              <Text style={{fontSize: 25}}>
                {deck.questions[cardNo].answer}
              </Text>
            )}
            <TouchableOpacity
              onpress={this.flip}>
              <Text style={{color: blue, fontSize: 20, marginTop: 20}}>{currentView === 'question' ? (<Text>Answer</Text>): (<Text>Question</Text>)}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <Btn
              text="Correct"
              backgroundColor={green}
              textColor={white}
              onPress={() => this.next(1)}
            />
            <Btn
              text="Incorrect"
              backgroundColor={black}
              textColor={white}
              onPress={() => this.next(0)}
            />
          </View>
        </View>
        )}
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

export default connect(mapStateToProps)(Quiz)