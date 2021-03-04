import axios from 'axios'
const apiURL = "https://api.covid19api.com"
export const GET_GLOBAL_DATA = () => {
  return {
    type: 'GET_GLOBAL_DATA',
    payload: new Promise((resolve, reject) => {
      axios.get(`${apiURL}/summary`)
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}

export const GET_COUNTRY_DATA = () => {
  return {
    type: 'GET_COUNTRY_DATA',
    payload: new Promise((resolve, reject) => {
      axios.get(`${apiURL}/countries`)
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}