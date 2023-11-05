import { configureStore } from '@reduxjs/toolkit'
import anecdotesReducer from './reducers/anecdotesReducer'
import notificationReducer from './reducers/notificationReducer'
import searchReducer from './reducers/searchReducer'

const store = configureStore({
  reducer: {
    anecdotes: anecdotesReducer,
    notification: notificationReducer,
    search: searchReducer,
  },
})

export default store
