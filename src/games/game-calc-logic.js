import _ from 'lodash'

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

export default getGameBrainCalcSpec
