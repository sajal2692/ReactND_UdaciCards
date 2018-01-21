import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Btn from './Button'
import { saveDeckTitle } from '../actions'
import { connect } from 'react-redux'

class AddCard extends Component {

  state = {
    question: '',
    answer: ''
  }

  handleQuestionTextChange = (input) => {
    this.setState((state)=> ({
      ...state,
      question: input
    }))
  }

  handleAnswerTextChange = (input) => {
    this.setState((state)=> ({
      ...state,
      answer: input
    }))
  }


  // submit = () => {
  //
  //   //Redux Action
  //   (this.state.input!='') && this.props.dispatch(saveDeckTitle(this.state.input))
  //
  //   //Update db
  //
  //   //Just clear state for now
  //   this.setState(() => ({
  //     input: ''
  //   }))
  // }

  render() {

    const {input} = this.state

    return (
      <View style={styles.container}>
        <View style={styles.formComp}>
          <Text style={{fontSize: 20}}>Question</Text>
          <TextInput
            value={input}
            style={styles.input}
            onChangeText={this.handleQuestionTextChange}
          />
        </View>
        <View style={styles.formComp}>
          <Text style={{fontSize: 20}}>Answer</Text>
          <TextInput
            value={input}
            style={styles.input}
            onChangeText={this.handleAnswerTextChange}
          />
        </View>
        <Btn onPress={this.submit} text="Submit"/>
      </View>
    );
  }
}

const styles  = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  input: {
    width: 200,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: '#757575',
    margin: 40,
  },
  formComp: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
})

export default connect()(AddCard)
