import { StrictMode } from 'react'

import { inspect } from '@xstate/inspect'
import { GlobalStyle } from 'app.styled'
import { createRoot } from 'react-dom/client'
import App from 'scenes/App'
import * as serviceWorker from 'serviceWorker'
// import { interpret } from 'xstate'

// import { toggleMachine } from 'state/state'

inspect({
  // options
  // url: 'https://stately.ai/viz?inspect', // (default)
  iframe: false, // open in new window
})

// const service = interpret(toggleMachine, { devTools: true })
// service.start()

const container = document.getElementById('root')
const root = createRoot(container!) // createRoot(container!) if you use TypeScript
root.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
