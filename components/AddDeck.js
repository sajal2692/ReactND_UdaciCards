import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Btn from './Button'
import { saveDeckTitle } from '../actions'
import { connect } from 'react-redux'

class AddDeck extends Component {

  state = {
    input:''
  }

  handleTextChange = (input) => {
    this.setState(()=> ({
      input
    }))
  }

  submit = () => {

    if (this.state.input!=='') {
      //Redux Action
      (this.state.input!='') && this.props.dispatch(saveDeckTitle(this.state.input))

      //Just clear state for now
      this.setState(() => ({
        input: ''
      }))

      //Route to new deck view
      this.props.navigation.navigate(
        'CardDeck',
        { deckId: this.state.input}
      )
    }

  }

  render() {

    const {input} = this.state

    return (
      <View style={styles.container}>
        <Text style={{fontSize: 20}}>What is the title of your new deck?</Text>
        <TextInput
          value={input}
          style={styles.input}
          onChangeText={this.handleTextChange}
        />
        <Btn onPress={this.submit} text="Create Deck"/>
      </View>
    );
  }
}

const styles  = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: '#757575',
    margin: 50,
  }
})

export default connect()(AddDeck)
