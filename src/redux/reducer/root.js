import { combineReducers } from 'redux'
import globalReducers from './global'
import countriesReducers from './countries'
import detailReducers from './details'

const rootReducers = combineReducers({
  global: globalReducers,
  country: countriesReducers,
  details: detailReducers
})


export default rootReducers