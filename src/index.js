import readLineSync from 'readline-sync'

const startGameBrain = (userName, gameMessage, gameQuestions, expectedAnswers) => {
  console.log(gameMessage)

  for (let i = 0; i < 3; i++) {
    console.log(`Question: ${gameQuestions[i]}`)

    const answer = readLineSync.question('Your answer: ')

    if (expectedAnswers[i] === answer) {
      console.log('Correct!')
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswers[i]}'. \n Let's try again, ${userName}!`)
      break
    }

    if (i === 3) {
      console.log(`Congratulations, ${userName}!`)
    }
  }
}

export default startGameBrain
