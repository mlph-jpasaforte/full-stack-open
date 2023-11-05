import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdotesReducer'
import {
  flashNotification,
  hideNotification,
} from '../reducers/notificationReducer'
import sortAnecdotes from '../utils/sortAnecdotes'

const Anecdote = ({ anecdote, handleClick }) => (
  <div>
    <div>{anecdote.text}</div>
    <div>
      has {anecdote.votes}
      <button onClick={handleClick}>vote</button>
    </div>
  </div>
)

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(({ anecdotes, search }) =>
    !search.searchQuery
      ? anecdotes
      : anecdotes.filter((anecdote) =>
          anecdote.text.includes(search.searchQuery)
        )
  )

  const sortedAnecdotes = sortAnecdotes([...anecdotes])

  const handleVoteAnecdote = ({ id, text }) => {
    dispatch(voteAnecdote({ id }))
    dispatch(flashNotification({ text: `you voted "${text}"` }))

    setTimeout(() => {
      dispatch(hideNotification())
    }, 5000)
  }

  return (
    <>
      {sortedAnecdotes.map((anecdote) => (
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => handleVoteAnecdote(anecdote)}
        />
      ))}
    </>
  )
}

export default AnecdoteList
