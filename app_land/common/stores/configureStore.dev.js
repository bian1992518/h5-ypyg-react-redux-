import { createStore, applyMiddleware, compose } from 'redux'
import React from 'react'
import thunk from 'redux-thunk'
//import { createDevTools } from 'redux-devtools'
// import LogMonitor from 'redux-devtools-log-monitor'
// import DockMonitor from 'redux-devtools-dock-monitor'
import createLogger from 'redux-logger'
//import api from '../middleware/api'
import rootReducer from '../reducers'
//import DevTools from '../containers/DevTools'

// const DevTools = createDevTools(
  // <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
  //   <LogMonitor theme="tomorrow" preserveScrollTop={false} />
  // </DockMonitor>
// )

export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunk, createLogger())
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}