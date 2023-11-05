import axios from 'axios'

const BASE_URL = import.meta.env.VITE_BASE_URL

const createAnecdote = async (anecdote) =>
  await axios
    .post(`${BASE_URL}/anecdotes`, anecdote)
    .then((response) => response.data)

const readAnecdotes = async () =>
  await axios.get(`${BASE_URL}/anecdotes`).then((response) => response.data)

const updateAnecdote = async (id, anecdote) =>
  await axios
    .put(`${BASE_URL}/anecdotes/${id}`, anecdote)
    .then((response) => response.data)

export default {
  createAnecdote,
  readAnecdotes,
  updateAnecdote,
}
