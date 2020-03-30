const countUniqueLetters = (string) => {
  if (string === null) {
    return null
  }
  const stringg = string.replace(/\s+/g, '').split('')
  const uniqueLetters = stringg.filter((letter, index) => {
    return stringg.indexOf(letter) === index
  })
  return uniqueLetters.length
}

export default countUniqueLetters
