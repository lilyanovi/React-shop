import { createStore, compose, combineReducers } from 'redux'
import { applicationsReducer } from './applications/reducer'
import { modalReducer } from './modal/reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  applications: applicationsReducer,
  modal: modalReducer
})

export const store = createStore(rootReducer, composeEnhancers())