import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { DarkModeContextProvider } from './context/darkModeContext'

ReactDOM.render(
  <DarkModeContextProvider>
    <App />
  </DarkModeContextProvider>,
  document.getElementById('root'),
)
