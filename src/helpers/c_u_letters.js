const countUniqueLetters = (string) => {
  if (string === null) {
    return null
  }
  const stringg = string.replace(' ', '').split('')
  const uniqueLetters = stringg.filter((letter, index) => {
    return stringg.indexOf(letter) === index
  })
  console.log(uniqueLetters)
  return uniqueLetters.length
}

export default countUniqueLetters
