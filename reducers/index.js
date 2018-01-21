import {
  RECEIVE_DECKS,
  RECEIVE_DECK,
  SAVE_DECK_TITLE,
  ADD_CARD_TO_DECK
} from "../actions";

function decks(state = default_state, action) {

  const { decks, card, title } = action

  switch (action.type) {
    case SAVE_DECK_TITLE:
      return {
        ...state,
        [title]: {
          title: title,
          questions: []
        }
      };

    case ADD_CARD_TO_DECK:
      return {
        ...state,
        [title]: {
          ...state[title],
          questions: [...state[title].questions, card]
        }
      };

    case RECEIVE_DECKS:
      return {
        ...state,
        decks
      };

    default:
      return state;
  }
}

export default decks;

const default_state = {
  React: {
    title: "React",
    questions: [
      {
        question: "What is React?",
        answer: "A library for managing user interfaces"
      },
      {
        question: "Where do you make Ajax requests in React?",
        answer: "The componentDidMount lifecycle event"
      }
    ]
  },
  JavaScript: {
    title: "JavaScript",
    questions: [
      {
        question: "What is a closure?",
        answer:
          "The combination of a function and the lexical environment within which that function was declared."
      }
    ]
  }
};
