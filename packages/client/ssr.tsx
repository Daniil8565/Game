import App from './src/App'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

export function render() {
  return ReactDOMServer.renderToString(<App />)
}
