import readlineSync from 'readline-sync';
import getRandomNumber from '../utils.js';

const gameRules = 'Find the greatest common divisor of given numbers.';
const gameRounds = 3;

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const brainGcdGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameRules);

  for (let count = 1; count <= gameRounds; count += 1) {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const question = `Question: ${num1} ${num2}`;
    console.log(question);
    const userAnswer = readlineSync.question('Answer: ');
    const rightAnswer = gcd(num1, num2).toString();
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gcd(num1, num2)}'.`);
      return console.log(`Let's try again, ${name}`);
    }
  }

  return console.log(`Congratulations, ${name}`);
};

export default brainGcdGame;
