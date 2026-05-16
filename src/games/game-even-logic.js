import _ from 'lodash'

const getGameBrainEvenSpec = () => {
  const gameMessage = 'Answer "yes" if the number is even, otherwise answer "no".'

  const gameQuestion = _.random(99)

  const expectedAnswer = gameQuestion % 2 === 0 ? 'yes' : 'no'

  return [gameMessage, gameQuestion, expectedAnswer]
}

export default getGameBrainEvenSpec
