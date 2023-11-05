import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id: 0,
    text: 'If it hurts, do it more often.',
    votes: 0,
  },
  {
    id: 1,
    text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    votes: 0,
  },
  {
    id: 2,
    text: 'Premature optimization is the root of all evil.',
    votes: 0,
  },
  {
    id: 3,
    text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    votes: 0,
  },
  {
    id: 4,
    text: 'The only way to go fast, is to go well.',
    votes: 0,
  },
]

const anecdotesSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    voteAnecdote(state, action) {
      const id = action.payload.id
      const anecdote = state.find((anecdote) => anecdote.id === id)
      // we can instead use anecdote.votes++
      const updatedAnecdote = {
        ...anecdote,
        votes: anecdote.votes + 1,
      }
      return state.map((anecdote) =>
        anecdote.id !== id ? anecdote : updatedAnecdote
      )
    },
    createAnecdote(state, action) {
      const createdAnecdote = {
        id: state.length + 1,
        text: action.payload.text,
        votes: 0,
      }
      state.push(createdAnecdote)
    },
  },
})

export const { voteAnecdote, createAnecdote } = anecdotesSlice.actions
export default anecdotesSlice.reducer
