import { createSlice } from '@reduxjs/toolkit'
import anecdotesService from '../services/anecdotesService'

const anecdotesSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    },
    synchronizeAnecdote(state, action) {
      const id = action.payload.id
      return state.map((anecdote) =>
        anecdote.id !== id ? anecdote : action.payload
      )
    },
  },
})

export const { appendAnecdote, setAnecdotes, synchronizeAnecdote } =
  anecdotesSlice.actions

export const createAnecdote = (text) => async (dispatch) => {
  const createdAnecdote = await anecdotesService.createAnecdote({
    text,
    votes: 0,
  })
  dispatch(appendAnecdote(createdAnecdote))
}

export const fetchAnecdotes = () => async (dispatch) => {
  const anecdotes = await anecdotesService.readAnecdotes()
  dispatch(setAnecdotes(anecdotes))
}

export const voteAnecdote =
  ({ id, text, votes }) =>
  async (dispatch) => {
    const updatedAnecdote = await anecdotesService.updateAnecdote(id, {
      text,
      votes: votes + 1,
    })
    dispatch(synchronizeAnecdote(updatedAnecdote))
  }

export default anecdotesSlice.reducer
