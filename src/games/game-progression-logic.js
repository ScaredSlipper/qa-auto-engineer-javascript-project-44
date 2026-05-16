import _ from 'lodash'

const getGameBrainProgressionSpec = () => {
  const gameMessage = 'What number is missing in the progression?'

  const [gameQuestion, expectedAnswer] = generateProgression()

  return [gameMessage, gameQuestion, expectedAnswer]
}

const generateProgression = () => {
  const start = _.random(50)
  const step = _.random(1, 20)
  const progressionArray = []

  for (let i = 0; i < 10; i++) {
    progressionArray.push(start + i * step)
  }

  const missingNumIndex = _.random(9)
  const expectedAnswer = _.toString(progressionArray[missingNumIndex])
  const gameQuestionArray = []

  for (let i = 0; i < 10; i++) {
    if (missingNumIndex === i) {
      gameQuestionArray.push('..')
    }
    else {
      gameQuestionArray.push(progressionArray[i])
    }
  }

  const gameQuestion = gameQuestionArray.join(' ')

  return [gameQuestion, expectedAnswer]
}

export default getGameBrainProgressionSpec
