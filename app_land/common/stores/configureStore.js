// if (process.env.NODE_ENV === 'production') {
//   module.exports = require('./configureStore.prod')
// } else {
//   module.exports = require('./configureStore.dev')
// }

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
//import api from '../middleware/api'
import rootReducer from '../reducers'

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk)
  )
}