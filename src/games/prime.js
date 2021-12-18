import readlineSync from 'readline-sync';
import getRandomNumber from '../utils.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const gameRounds = 3;

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const brainPrimeGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameRules);

  for (let count = 1; count <= gameRounds; count += 1) {
    const num = getRandomNumber();
    const question = `Question: ${num}`;
    console.log(question);
    const userAnswer = readlineSync.question('Answer: ');
    const rightAnswer = isPrime(num) ? 'yes' : 'no';
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      return console.log(`Let's try again, ${name}`);
    }
  }

  return console.log(`Congratulations, ${name}`);
};

export default brainPrimeGame;
