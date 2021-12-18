import readlineSync from 'readline-sync';
import getRandomNumber from '../utils.js';

const gameRules = 'What number is missing in the progression?';
const gameRounds = 3;
const minLength = 5;
const maxLength = 10;

const generateProgression = (length, firstElement, step) => {
  const progression = [];
  let num = firstElement;
  while (progression.length < length) {
    progression.push(num);
    num += step;
  }

  return progression;
};

const brainProgressionGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameRules);

  for (let count = 1; count <= gameRounds; count += 1) {
    const length = getRandomNumber(minLength, maxLength);
    const firstElement = getRandomNumber();
    const step = getRandomNumber(2, 50);
    const hiddenSymbol = getRandomNumber(0, length - 1);
    const progression = generateProgression(length, firstElement, step);
    const hiddenNum = (progression.splice(hiddenSymbol, 1, '..')).toString();
    const question1 = `Question: ${progression.join(' ')}`;
    console.log(question1);
    const userAnswer = readlineSync.question('Answer: ');
    if (userAnswer === hiddenNum) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${hiddenNum}'.`);
      return console.log(`Let's try again, ${name}`);
    }
  }

  return console.log(`Congratulations, ${name}`);
};

export default brainProgressionGame;
