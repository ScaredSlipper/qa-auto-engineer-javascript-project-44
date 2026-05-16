#!/usr/bin/env node

import askName from '../src/cli.js'

const userName = askName()

import { getGameParameters, startGameBrain } from '../src/index.js'

const [gameMessage, gameQuestions, expectedAnswers] = getGameParameters('brainPrime')

startGameBrain(userName, gameMessage, gameQuestions, expectedAnswers)
