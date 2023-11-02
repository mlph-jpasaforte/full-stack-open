import axios from 'axios'

const baseUrl = 'http://localhost:3001/notes'

const create = (note) =>
  axios.post(baseUrl, note).then((response) => response.data)

const read = () => axios.get(baseUrl).then((response) => response.data)

const update = (id, note) =>
  axios.put(`${baseUrl}/${id}`, note).then((response) => response.data)

export default {
  create,
  read,
  update,
}
