import gameEngine from '../index.js';
import getRandomNumber from '../utils.js';

const gameRules = 'Find the greatest common divisor of given numbers.';
const minNum = 1;
const maxNum = 100;

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const generateGameData = () => {
  const number1 = getRandomNumber(minNum, maxNum);
  const number2 = getRandomNumber(minNum, maxNum);
  const question = `${number1} ${number2}`;
  const userAnswer = gcd(number1, number2).toString();

  return [question, userAnswer];
};

export default () => {
  gameEngine(gameRules, generateGameData);
};
