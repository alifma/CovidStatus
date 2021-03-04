import { combineReducers } from 'redux'
import globalReducers from './global'
import countriesReducers from './countries'

const rootReducers = combineReducers({
  global: globalReducers,
  country: countriesReducers
})


export default rootReducers