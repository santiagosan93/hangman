const removeNumbers = (string) => {
  let goodString = string.replace(/\d+/g, '')
  console.log(goodString)

  // Don't know why the . is not being replaces when a user leaves the '.' generated by the
  // input field when the user types twice the space bar
  goodString = goodString.replace(/\./g, '')
  return goodString
}

export default removeNumbers
