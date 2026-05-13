import readLineSync from 'readline-sync'

const startGameBrainEven = (userName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  for (let i = 1; i < 4; i++) {
    const num = Math.floor(Math.random() * 100) //  zero is even

    console.log(`Question: ${num}`)

    const answer = readLineSync.question('Your answer: ')

    const expectedAnswer = num % 2 === 0 ? 'yes' : 'no'

    if (expectedAnswer === answer) {
      console.log('Correct!')
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'. \n Let's try again, ${userName}!`)
      break
    }

    if (i === 3) {
      console.log(`Congratulations, ${userName}!`)
    }
  }
}

export default startGameBrainEven
