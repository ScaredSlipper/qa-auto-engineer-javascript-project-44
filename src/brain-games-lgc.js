const getGameSpecifics = (game) => {
  switch (game) {
    case 'brainEven': {
      const gameMessage = 'Answer "yes" if the number is even, otherwise answer "no".'
      const gameQuestion = Math.floor(Math.random() * 100)
      const expectedAnswer = gameQuestion % 2 === 0 ? 'yes' : 'no'
      return [gameMessage, gameQuestion, expectedAnswer]
    }
    case 'brainCalc': {
      const gameMessage = 'Answer "yes" if the number is even, otherwise answer "no".'
      const gameQuestion = Math.floor(Math.random() * 100)
      const expectedAnswer = gameQuestion % 2 === 0 ? 'yes' : 'no'
      return [gameMessage, gameQuestion, expectedAnswer]
    }
  }
}

export default getGameSpecifics
