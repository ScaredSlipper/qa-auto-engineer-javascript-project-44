import _ from 'lodash'

const getGameSpecifics = (game) => {
  switch (game) {
    case 'brainEven': {
      const gameMessage = 'Answer "yes" if the number is even, otherwise answer "no".'

      const gameQuestion = Math.floor(Math.random() * 100)

      const expectedAnswer = gameQuestion % 2 === 0 ? 'yes' : 'no'

      return [gameMessage, gameQuestion, expectedAnswer]
    }
    case 'brainCalc': {
      const gameMessage = 'What is the result of the expression?'

      const firstNum = Math.floor(Math.random() * 100)
      const secondNum = Math.floor(Math.random() * 100)
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
  }
}

export default getGameSpecifics
