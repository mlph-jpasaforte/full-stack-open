import { useSelector } from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Search from './components/Search'

const App = () => {
  const notification = useSelector(({ notification }) => notification)

  return (
    <div>
      <h2>Anecdotes</h2>
      {notification ? <Notification notification={notification} /> : <Search />}
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App
