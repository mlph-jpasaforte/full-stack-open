import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAnecdotes, voteAnecdote } from '../reducers/anecdotesReducer'
import { showNotification } from '../reducers/notificationReducer'
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

  useEffect(() => {
    dispatch(fetchAnecdotes())
  }, [])

  const anecdotes = useSelector(({ anecdotes, search }) =>
    !search
      ? anecdotes
      : anecdotes.filter((anecdote) => anecdote.text.includes(search))
  )

  const sortedAnecdotes = sortAnecdotes([...anecdotes])

  const handleVoteAnecdote = (anecdote) => {
    dispatch(voteAnecdote(anecdote))
    dispatch(showNotification(`you voted "${anecdote.text}"`, 5))
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
