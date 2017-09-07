import { applyMiddleware, createStore, compose, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import adminQuestionReducer from '../components/adminPage/redux/adminQuestionReducer'

const logger = createLogger({
    timestamp:true,
    duration:true
})
const middleware = compose(
    applyMiddleware(thunk, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)
const allReducers = combineReducers({
    adminQuestionReducer,
})

export default createStore(allReducers, middleware)


