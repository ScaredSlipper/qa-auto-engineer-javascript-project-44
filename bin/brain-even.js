#!/usr/bin/env node

import askName from '../src/cli.js'

const userName = askName()

import { getGameParameters } from '../src/index.js'

const [gameMessage, gameQuestions, expectedAnswers] = getGameParameters('brainEven')

import { startGameBrain } from '../src/index.js'

startGameBrain(userName, gameMessage, gameQuestions, expectedAnswers)
