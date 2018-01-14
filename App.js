import React from 'react';
import { Text, View, Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation'
import ListDecks from './components/ListDecks'
import AddDeck from './components/AddDeck'
import CardDeck from './components/CardDeck'
import { MaterialCommunityIcons, FontAwesome, Ionicons } from '@expo/vector-icons'
import { white, black, purple } from './utils/colors'

const Tabs = TabNavigator({
  ListDecks: {
    screen: ListDecks,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='cards' size={27} color={tintColor} />
    },
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={27} color={tintColor} />
    },
  },
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: white,
    style: {
      height: 50,
      backgroundColor: black,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  CardDeck: {
    screen: CardDeck,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: black
      }
    }
  }
})


export default class App extends React.Component {
  render() {
    return (
      <MainNavigator />
    );
  }
}
