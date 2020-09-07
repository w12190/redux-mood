const INITIAL_STATE = { mood: "?" }

function moodReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "BEAR":
      return { ...state, mood: "ʕ•ᴥ•ʔ" };
    case "FLIP_TABLE":
      return { ...state, mood: "(┛◉Д◉)┛彡┻━┻" };
    case "":
      return {};
    case "":
      return {};

    default:
      return state
  }
}

const store = Redux.createStore(moodReducer)