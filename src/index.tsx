import { StrictMode } from 'react'

import { GlobalStyle } from 'app.styled'
import ReactDOM from 'react-dom'
import App from 'scenes/App'
import * as serviceWorker from 'serviceWorker'

ReactDOM.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
