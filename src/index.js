import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { getStats } from './app/components/stats/StatsHandler'
import { accessToken } from './util/GoogleApi'

export let stats = {}

async function renderApp() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )
  stats = await getStats()
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // console.log(stats);
  }
}

renderApp()

window.onload = () => {
  renderApp()
}
const refreshInterval = setInterval(() => {
  const shouldRefreshComponent = accessToken !== undefined && accessToken !== ''
  if (shouldRefreshComponent) {
    renderApp()
    clearInterval(refreshInterval)
  }
}, 1000)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
