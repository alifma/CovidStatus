const formatDate = (date) => {
  const arrMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Desember']
  const arrDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const day = arrDay[new Date(date).getDay()]
  const month = arrMonth[new Date(date).getMonth()]
  const dates = new Date(date).getDate()
  const years = new Date(date).getFullYear()
  return(`${day}, ${dates} ${month} ${years}`)
}
export default formatDate