import _ from 'lodash'

const getGameBrainPrimeSpec = () => {
  const gameMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".'

  const gameQuestion = _.random(99)

  const expectedAnswer = checkPrime(gameQuestion)

  return [gameMessage, gameQuestion, expectedAnswer]
}

const checkPrime = (num) => {
  switch (true) {
    case num < 2:
      return 'no'
    case num === 2:
      return 'yes'
    case num % 2 === 0:
      return 'no'
    case num === 3 || num === 5 || num === 7:
      return 'yes'
    default:
      for (let i = 3; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return 'no'
        }
      }
      return 'yes'
  }
}

export default getGameBrainPrimeSpec
