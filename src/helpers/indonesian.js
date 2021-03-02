const FormatIndo = (value) => {
  return value.toLocaleString().replace(/,/g, '.')
}

export default FormatIndo;