import readLineSync from 'readline-sync'

const askName = () => {
  let userName = readLineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)
}

export default askName
