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
