import ReactDOM from 'react-dom/client'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import anecdoteReducer from './reducers/anecdoteReducer.js'
import searchReducer from './reducers/searchReducer.js'
import App from './App.jsx'

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  searchQuery: searchReducer,
})

const store = createStore(reducer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
