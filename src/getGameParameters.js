import getGameSpecifics from './brain-games-lgc.js'

const getGameParameters = (game) => {
  const [gameMessage, ,] = getGameSpecifics(game)

  const gameQuestions = []
  const expectedAnswers = []

  for (let i = 0; i < 3; i++) {
    const [, gameQuestion, expectedAnswer] = getGameSpecifics(game)
    gameQuestions.push(gameQuestion)
    expectedAnswers.push(expectedAnswer)
  }
  const gameParameters = [gameMessage, gameQuestions, expectedAnswers]
  return gameParameters
}
export default getGameParameters
