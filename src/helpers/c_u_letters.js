const countUniqueLetters = (string) => {
  const stringg = string.split('')
  const uniqueLetters = stringg.filter((letter, index) => {
    return stringg.indexOf(letter) === index
  })
  console.log(uniqueLetters.length)
  return uniqueLetters.length
}

export default countUniqueLetters
