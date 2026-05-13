import readLineSync from 'readline-sync'

const askName = () => {
  const userName = readLineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)
  return userName
}

export default askName
