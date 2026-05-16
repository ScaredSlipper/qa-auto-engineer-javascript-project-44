import _ from 'lodash'

const getGameSpecifics = (game) => {
  switch (game) {
    case 'brainEven': {
      const [gameMessage, gameQuestion, expectedAnswer] = getGameBrainEvenSpec()
      return [gameMessage, gameQuestion, expectedAnswer]
    }
    case 'brainCalc': {
      const [gameMessage, gameQuestion, expectedAnswer] = getGameBrainCalcSpec()
      return [gameMessage, gameQuestion, expectedAnswer]
    }
    case 'brainGCD': {
      const [gameMessage, gameQuestion, expectedAnswer] = getGameBrainGCDSpec()
      return [gameMessage, gameQuestion, expectedAnswer]
    }
    case 'brainProgression': {
      const [gameMessage, gameQuestion, expectedAnswer] = getGameBrainProgressionSpec()
      return [gameMessage, gameQuestion, expectedAnswer]
    }
    case 'brainPrime': {
      const [gameMessage, gameQuestion, expectedAnswer] = getGameBrainPrimeSpec()
      return [gameMessage, gameQuestion, expectedAnswer]
    }
  }
}

export default getGameSpecifics

const getGameBrainEvenSpec = () => {
  const gameMessage = 'Answer "yes" if the number is even, otherwise answer "no".'

  const gameQuestion = _.random(99)

  const expectedAnswer = gameQuestion % 2 === 0 ? 'yes' : 'no'

  return [gameMessage, gameQuestion, expectedAnswer]
}

const getGameBrainCalcSpec = () => {
  const gameMessage = 'What is the result of the expression?'

  const firstNum = _.random(99)
  const secondNum = _.random(99)
  const operatorList = ['+', '-', '*']
  const operator = _.sample(operatorList)
  const gameQuestion = `${firstNum} ${operator} ${secondNum}`

  switch (operator) {
    case '+': {
      const expectedAnswer = _.toString(firstNum + secondNum)
      return [gameMessage, gameQuestion, expectedAnswer]
    }
    case '-': {
      const expectedAnswer = _.toString(firstNum - secondNum)
      return [gameMessage, gameQuestion, expectedAnswer]
    }
    case '*': {
      const expectedAnswer = _.toString(firstNum * secondNum)
      return [gameMessage, gameQuestion, expectedAnswer]
    }
  }
}

const getGameBrainGCDSpec = () => {
  const gameMessage = 'Find the greatest common divisor of given numbers.'

  const firstNum = _.random(99)
  const secondNum = _.random(99)
  const gameQuestion = `${firstNum} ${secondNum}`

  const expectedAnswer = _.toString(calculateGCD(firstNum, secondNum))

  return [gameMessage, gameQuestion, expectedAnswer]
}

const calculateGCD = (firstNum, secondNum) => {
  while (secondNum !== 0) {
    let temp = secondNum
    secondNum = firstNum % secondNum
    firstNum = temp
  }
  return firstNum
}

const getGameBrainProgressionSpec = () => {
  const gameMessage = 'What number is missing in the progression?'

  const [gameQuestion, expectedAnswer] = generateProgression()

  return [gameMessage, gameQuestion, expectedAnswer]
}

const generateProgression = () => {
  const start = _.random(50)
  const step = _.random(1, 20)
  const progressionArray = []

  for (let i = 0; i < 10; i++) {
    progressionArray.push(start + i * step)
  }

  const missingNumIndex = _.random(9)
  const expectedAnswer = _.toString(progressionArray[missingNumIndex])
  const gameQuestionArray = []

  for (let i = 0; i < 10; i++) {
    if (missingNumIndex === i) {
      gameQuestionArray.push('..')
    }
    else {
      gameQuestionArray.push(progressionArray[i])
    }
  }

  const gameQuestion = gameQuestionArray.join(' ')

  return [gameQuestion, expectedAnswer]
}

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
