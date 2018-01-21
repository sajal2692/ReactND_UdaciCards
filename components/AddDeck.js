import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import SubmitBtn from './SubmitButton'
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

    //Redux Action
    (this.state.input!='') && this.props.dispatch(saveDeckTitle(this.state.input))

    //Update db

    //Just clear state for now
    this.setState(() => ({
      input: ''
    }))
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
        <SubmitBtn onPress={this.submit} text="Submit"/>
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
