// Inisialisasi state awalnya
const initialState = {
  list: {
    TotalConfirmed: 0,
    NewConfirmed: 0,
    TotalDeaths: 0,
    NewDeaths: 0,
    TotalRecovered: 0,
    NewRecovered: 0
  },
  country: [],
  listLoading: true,
  listError: false,
  errMessage: null
}

const globalReducers = (state = initialState, action) => {
  switch (action.type) {
    case "GET_GLOBAL_DATA_PENDING":
      console.log('pending')
      return {...state, listLoading: true}
    case "GET_GLOBAL_DATA_FULFILLED":
      console.log('FullFilled')
      return {...state, listLoading: false, list: action.payload.Global, country: action.payload.Countries}
    case "GET_GLOBAL_DATA_REJECTED":
      console.log('Rejected')
      return {...state, listLoading: false, listError: true, errMessage: 'Server Did Not Response :('}
    default: 
      return state
  }
}

export default globalReducers