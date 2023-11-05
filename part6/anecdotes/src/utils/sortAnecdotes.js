const sortAnecdotes = (anecdotes) =>
  anecdotes.sort((first, second) => second.votes - first.votes)

export default sortAnecdotes
