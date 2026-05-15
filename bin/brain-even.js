#!/usr/bin/env node

import askName from '../src/cli.js'

const userName = askName()

import startGameBrainEven from '../src/brain-even-src.js'

const [gameMessage, gameQuestions, expectedAnswers] = startGameBrainEven()

import startGameBrain from '../src/index.js'

startGameBrain(userName, gameMessage, gameQuestions, expectedAnswers)
