const initialState = {
  list: [],
  listLoading: true,
  listError: false,
  errMessage: null
}

const countriesReducers = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COUNTRY_DATA_PENDING":
      return {...state, listLoading: true}
    case "GET_COUNTRY_DATA_FULFILLED":
      return {...state, listLoading: false, list: action.payload}
    case "GET_COUNTRY_DATA_REJECTED":
      return {...state, listLoading: false, listError: true, errMessage: 'Server Did Not Response :('}
    default: 
      return state
  }
}

export default countriesReducers