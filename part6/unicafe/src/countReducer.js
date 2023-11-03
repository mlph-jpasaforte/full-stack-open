const count = {
  good: 0,
  ok: 0,
  bad: 0,
}

const countReducer = (state = count, action) => {
  switch (action.type) {
    case 'INCREMENT_GOOD':
      return {
        ...state,
        good: state.good + 1,
      }
    case 'INCREMENT_OK':
      return {
        ...state,
        ok: state.ok + 1,
      }
    case 'INCREMENT_BAD':
      return {
        ...state,
        bad: state.bad + 1,
      }
    case 'RESET_STATISTICS':
      return {
        ok: 0,
        good: 0,
        bad: 0,
      }
    default:
      return state
  }
}

export default countReducer
