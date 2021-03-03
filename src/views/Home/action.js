import axios from 'axios'
export const GET_GLOBAL_DATA = () => {
  return {
    type: 'GET_GLOBAL_DATA',
    payload: new Promise((resolve, reject) => {
      axios.get('https://api.covid19api.com/summary')
        .then((res) => {
          resolve(res.data.Global)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}