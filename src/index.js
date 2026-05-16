import readLineSync from 'readline-sync'
import askName from '../src/cli.js'
import getGameSpecifics from './brain-games-lgc.js'

const startGameBrain = (game) => {
  const userName = askName()

  const [gameMessage, ,] = getGameSpecifics(game)
  console.log(gameMessage)

  for (let i = 0; i < 3; i++) {
    const [, gameQuestion, expectedAnswer] = getGameSpecifics(game)
    console.log(`Question: ${gameQuestion}`)

    const answer = readLineSync.question('Your answer: ')

    if (expectedAnswer === answer) {
      console.log('Correct!')
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'. \nLet's try again, ${userName}!`)
      break
    }

    if (i === 2) {
      console.log(`Congratulations, ${userName}!`)
    }
  }
}

export default startGameBrain
