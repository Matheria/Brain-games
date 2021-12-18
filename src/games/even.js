import readlineSync from 'readline-sync';
import getRandomNumber from '../utils.js';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const gameRounds = 3;

const brainEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameRules);

  for (let count = 1; count <= gameRounds; count += 1) {
    const num = getRandomNumber();
    const question = `Question: ${num}`;
    console.log(question);
    const userAnswer = readlineSync.question('Answer: ');
    if (userAnswer === isEven(num)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isEven(num)}'.`);
      return console.log(`Let's try again, ${name}`);
    }
  }

  return console.log(`Congratulations, ${name}`);
};

export default brainEvenGame;
