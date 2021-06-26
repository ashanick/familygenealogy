import {createStore, applyMiddleware} from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'

export const getUserDetailsFromStore = createStore(reducer, applyMiddleware(thunk))