const removeNumbers = (string) => {
  const regex = /\d+/
  const goodString = string.replace(regex, '')
  return goodString
}

export default removeNumbers
