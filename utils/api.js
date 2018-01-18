import { AsyncStorage } from 'react-native'

const DECKS_STORAGE_KEY = 'UdaciCards:decks'

export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((results) => {
      if (results) {
        return {
          JSON.parse(results)
          ...default_data
        }
      } else {
        return default_data
      }
    })
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
