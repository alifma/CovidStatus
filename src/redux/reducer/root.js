import { combineReducers } from 'redux'
import globalReducers from './global'

const rootReducers = combineReducers({
  global: globalReducers
})


export default rootReducers