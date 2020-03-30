const removeDoubleSpacaes = (string) => {
  const regex = /\W+/
  const goodString = string.replace(regex, ' ')
  return goodString
}

export default removeDoubleSpacaes
