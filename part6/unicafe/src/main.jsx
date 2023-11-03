import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore } from 'redux'
import countReducer from './countReducer'

const store = createStore(countReducer)

const App = () => {
  const incrementGood = () => {
    store.dispatch({
      type: 'INCREMENT_GOOD',
    })
  }

  const incrementOk = () => {
    store.dispatch({
      type: 'INCREMENT_OK',
    })
  }

  const incrementBad = () => {
    store.dispatch({
      type: 'INCREMENT_BAD',
    })
  }

  const resetStatistics = () => {
    store.dispatch({
      type: 'RESET_STATISTICS',
    })
  }

  return (
    <div>
      <button onClick={incrementGood}>good</button>
      <button onClick={incrementOk}>ok</button>
      <button onClick={incrementBad}>bad</button>
      <button onClick={resetStatistics}>reset statistics</button>
      <p>good {store.getState().good}</p>
      <p>ok {store.getState().ok}</p>
      <p>bad {store.getState().bad}</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderApp = () => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

renderApp()

store.subscribe(renderApp)
