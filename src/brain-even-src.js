const startGameBrainEven = () => {
  const gameMessage = 'Answer "yes" if the number is even, otherwise answer "no".'

  const gameQuestions = []
  const expectedAnswers = []

  for (let i = 0; i < 3; i++) {
    const gameQuestion = Math.floor(Math.random() * 100)
    gameQuestions.push(gameQuestion)

    const expectedAnswer = gameQuestion % 2 === 0 ? 'yes' : 'no'
    expectedAnswers.push(expectedAnswer)
  }
  const gameParameters = [gameMessage, gameQuestions, expectedAnswers]
  return gameParameters
}
export default startGameBrainEven
