import { AsyncStorage } from 'react-native'

const DECKS_STORAGE_KEY = 'UdaciCards:decks'

export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(results => JSON.parse(results))
}

export function getDeck(id) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(results => results[id])
}

export function saveDeckTitle(title) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [title]: {
      title: title,
      questions: null
    }
  }))
}

export function addCardToDeck(title,card) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[title]['questions'].push(card)
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
    })
}

//Data Shape for reference
//   React: {
//     title: 'React',
//     questions: [
//       {
//         question: 'What is React?',
//         answer: 'A library for managing user interfaces'
//       },
//       {
//         question: 'Where do you make Ajax requests in React?',
//         answer: 'The componentDidMount lifecycle event'
//       }
//     ]
//   },
//   JavaScript: {
//     title: 'JavaScript',
//     questions: [
//       {
//         question: 'What is a closure?',
//         answer: 'The combination of a function and the lexical environment within which that function was declared.'
//       }
//     ]
//   }
// }
