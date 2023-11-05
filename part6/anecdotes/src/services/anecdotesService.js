import axios from 'axios'

const BASE_URL = import.meta.env.VITE_BASE_URL

const createAnecdote = async (anecdote) => {
  const response = await axios.post(`${BASE_URL}/anecdotes`, anecdote)
  return response.data
}

const readAnecdotes = async () => {
  const response = await axios.get(`${BASE_URL}/anecdotes`)
  return response.data
}

const updateAnecdote = async (id, anecdote) => {
  const response = await axios.put(`${BASE_URL}/anecdotes/${id}`, anecdote)
  return response.data
}

export default {
  createAnecdote,
  readAnecdotes,
  updateAnecdote,
}
