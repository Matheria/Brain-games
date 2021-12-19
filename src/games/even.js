import gameEngine from '../index.js';
import getRandomNumber from '../utils.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const minNum = 1;
const maxNum = 100;

const isEven = (num) => num % 2 === 0;

const generateGameData = () => {
  const question = getRandomNumber(minNum, maxNum);
  const userAnswer = isEven(question) ? 'yes' : 'no';
  return [question, userAnswer];
};

export default () => {
  gameEngine(gameRules, generateGameData);
};
