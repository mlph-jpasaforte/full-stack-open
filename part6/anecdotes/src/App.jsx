import { useSelector } from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Search from './components/Search'

const App = () => {
  const text = useSelector(({ notification }) => notification.text)

  return (
    <div>
      <h2>Anecdotes</h2>
      {text ? <Notification text={text} /> : <Search />}
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App
