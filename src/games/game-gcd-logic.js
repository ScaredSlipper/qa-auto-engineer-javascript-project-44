import _ from 'lodash'

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

export default getGameBrainGCDSpec
