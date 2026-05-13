#!/usr/bin/env node

import askName from '../src/cli.js'

console.log('Welcome to the Brain Games!')

const userName = askName()

//  or do we import it from brain-games.js?

import startGameBrainEven from '../src/brain-even-src.js'

startGameBrainEven(userName)
