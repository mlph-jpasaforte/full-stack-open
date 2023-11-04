import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Search from './components/Search'

const App = () => (
  <div>
    <h2>Anecdotes</h2>
    <Search />
    <AnecdoteList />
    <AnecdoteForm />
  </div>
)

export default App
