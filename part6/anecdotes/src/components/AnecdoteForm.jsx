import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdotesReducer'
import {
  flashNotification,
  hideNotification,
} from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const handleCreateAnecdote = (event) => {
    event.preventDefault()

    const text = event.target.text.value
    event.target.text.value = ''

    dispatch(createAnecdote({ text }))
    dispatch(flashNotification({ text: `you created "${text}"` }))

    setTimeout(() => {
      dispatch(hideNotification())
    }, 5000)
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={handleCreateAnecdote}>
        <div>
          <input name="text" />
        </div>
        <button type="submit">create</button>
      </form>
    </>
  )
}

export default AnecdoteForm
