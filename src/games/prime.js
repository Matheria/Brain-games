import gameEngine from '../index.js';
import getRandomNumber from '../utils.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minNum = 1;
const maxNum = 100;

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

const generateGameData = () => {
  const number = getRandomNumber(minNum, maxNum);
  const question = `${number}`;
  const userAnswer = isPrime(number) ? 'yes' : 'no';

  return [question, userAnswer];
};

export default () => {
  gameEngine(gameRules, generateGameData);
};
