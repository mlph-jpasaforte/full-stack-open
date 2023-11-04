import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'

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
  const sortAnecdotes = (anecdotes) =>
    anecdotes.sort((first, second) => second.votes - first.votes)

  const dispatch = useDispatch()
  const anecdotes = useSelector(({ anecdotes, searchQuery }) =>
    sortAnecdotes(
      !searchQuery
        ? anecdotes
        : anecdotes.filter((anecdote) => anecdote.text.includes(searchQuery))
    )
  )

  return (
    <>
      {anecdotes.map((anecdote) => (
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => dispatch(voteAnecdote(anecdote.id))}
        />
      ))}
    </>
  )
}

export default AnecdoteList
