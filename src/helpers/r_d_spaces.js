const removeDoubleSpacaes = (string) => {
  const regex = /\W+/
  const goodString = string.replace(regex, ' ')
  console.log(goodString)
  return goodString
}

export default removeDoubleSpacaes
