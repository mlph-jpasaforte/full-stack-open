import ReactDOM from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import anecdotesReducer from './reducers/anecdotesReducer'
import notificationReducer from './reducers/notificationReducer'
import searchReducer from './reducers/searchReducer'
import App from './App'

const store = configureStore({
  reducer: {
    anecdotes: anecdotesReducer,
    notification: notificationReducer,
    search: searchReducer,
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
