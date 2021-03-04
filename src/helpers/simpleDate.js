const simpleDate = (date) => {
  let month = new Date(date).getMonth().toString()
  month = month.length > 1? month: '0' + month;
  let dates = new Date(date).getDate().toString()
  dates = dates.length > 1? dates: '0' + dates;
  const years = new Date(date).getFullYear()
  return(`${dates}/${month}/${years}`)
}
export default simpleDate