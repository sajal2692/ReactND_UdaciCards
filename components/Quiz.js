import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from 'react-redux'
import { gray } from '../utils/colors'
import Btn from './Button'
import { black, white, red, green, blue } from '../utils/colors'
import { clearLocalNotifications, setLocalNotification } from '../utils/notifications'

class Quiz extends Component {

  state = {
    currentView: 'question',
    cardNo: 0,
    score: 0
  }


  next = (addScore) => {

    //Clear Notifications if quiz complete
    if (this.state.cardNo === this.props.deck.questions.length) {
      clearLocalNotifications()
        .then(setLocalNotification())
    }

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

  restart = () => {
    this.setState({
        currentView: 'question',
        cardNo: 0,
        score: 0
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
            <View style={styles.textContainer}>
              <Text style={{fontSize: 35}}>
                Score: {((score*100)/deck.questions.length).toFixed(2)} %
              </Text>
            </View>
            <View style={styles.buttonContainer}>
              <Btn
                text="Restart Quiz"
                backgroundColor={white}
                textColor={black}
                onPress={this.restart}
              />
              <Btn
                text="Back to Deck"
                backgroundColor={black}
                textColor={white}
                onPress={()=> {
                  this.props.navigation.goBack()
                }}
              />
            </View>
          </View>
        )
        : (
          <View style={styles.mainContainer}>
            <View>
              <Text style={{fontSize: 25}}>{cardNo+1}/{deck.questions.length}</Text>
            </View>
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
                  onPress={this.flip}>
                  <Text style={{color: blue, fontSize: 20, marginTop: 20}}>{currentView === 'question' ? (<Text>Show Answer</Text>): (<Text>Show Question</Text>)}</Text>
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
          </View>
          )}
        </View>
      );
    }
  }

const styles  = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start'
  },
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
