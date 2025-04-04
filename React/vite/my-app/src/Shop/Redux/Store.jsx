import { createStore } from 'redux'
// import Reducer from './Reducer'
import { rootReducer } from './rootreducer'
import { applyMiddleware } from 'redux'
import logger from 'redux-logger'

const store = createStore(rootReducer, applyMiddleware(logger))
export default store