#!/usr/bin/env node

import askName from '../src/cli.js'

const userName = askName()

import { getGameParameters, startGameBrain } from '../src/index.js'

const [gameMessage, gameQuestions, expectedAnswers] = getGameParameters('brainCalc')

startGameBrain(userName, gameMessage, gameQuestions, expectedAnswers)
