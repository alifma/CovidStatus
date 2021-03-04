const formatDate = (date) => {
  const arrMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Desember']
  const arrDay = ['Sunday', 'Monday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const day = arrDay[new Date(date).getDay()]
  const month = arrMonth[new Date(date).getMonth()]
  const dates = new Date(date).getDate()
  const years = new Date(date).getFullYear()
  // const time = new Date(date).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
  return(`${day}, ${dates} ${month} ${years}`)
  // return(date)
}
export default formatDate