import getGameBrainEvenSpec from './games/game-even-logic.js'
import getGameBrainCalcSpec from './games/game-calc-logic.js'
import getGameBrainGCDSpec from './games/game-gcd-logic.js'
import getGameBrainProgressionSpec from './games/game-progression-logic.js'
import getGameBrainPrimeSpec from './games/game-prime-logic.js'

const getGameSpecifics = (game) => {
  switch (game) {
    case 'brainEven': {
      const [gameMessage, gameQuestion, expectedAnswer] = getGameBrainEvenSpec()
      return [gameMessage, gameQuestion, expectedAnswer]
    }
    case 'brainCalc': {
      const [gameMessage, gameQuestion, expectedAnswer] = getGameBrainCalcSpec()
      return [gameMessage, gameQuestion, expectedAnswer]
    }
    case 'brainGCD': {
      const [gameMessage, gameQuestion, expectedAnswer] = getGameBrainGCDSpec()
      return [gameMessage, gameQuestion, expectedAnswer]
    }
    case 'brainProgression': {
      const [gameMessage, gameQuestion, expectedAnswer] = getGameBrainProgressionSpec()
      return [gameMessage, gameQuestion, expectedAnswer]
    }
    case 'brainPrime': {
      const [gameMessage, gameQuestion, expectedAnswer] = getGameBrainPrimeSpec()
      return [gameMessage, gameQuestion, expectedAnswer]
    }
  }
}

export default getGameSpecifics
