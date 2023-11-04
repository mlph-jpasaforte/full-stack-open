const initialState = {
  anecdotes: [
    {
      id: 0,
      text: 'If it hurts, do it more often.',
      votes: 0,
    },
    {
      id: 1,
      text: 'Adding manpower to a late software project makes it later!',
      votes: 0,
    },
    {
      id: 2,
      text: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      votes: 0,
    },
    {
      id: 3,
      text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      votes: 0,
    },
    {
      id: 4,
      text: 'Premature optimization is the root of all evil.',
      votes: 0,
    },
    {
      id: 5,
      text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      votes: 0,
    },
    {
      id: 6,
      text: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
      votes: 0,
    },
    {
      id: 7,
      text: 'The only way to go fast, is to go well.',
      votes: 0,
    },
  ],
}

const anecdoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'VOTE_ANECDOTE': {
      const id = action.payload.id
      const anecdote = state.anecdotes.find((anecdote) => anecdote.id === id)
      const updatedAnecdote = {
        ...anecdote,
        votes: anecdote.votes + 1,
      }
      return {
        ...state,
        anecdotes: state.anecdotes.map((anecdote) =>
          anecdote.id !== id ? anecdote : updatedAnecdote
        ),
      }
    }
    case 'CREATE_ANECDOTE':
      const createdAnecdote = {
        id: state.anecdotes.length + 1,
        text: action.payload.text,
        votes: 0,
      }
      return {
        ...state,
        anecdotes: state.anecdotes.concat(createdAnecdote),
      }
    default:
      return state
  }
}

export const voteAnecdote = (id) => ({
  type: 'VOTE_ANECDOTE',
  payload: {
    id,
  },
})

export const createAnecdote = (text) => ({
  type: 'CREATE_ANECDOTE',
  payload: {
    text,
  },
})

export default anecdoteReducer
