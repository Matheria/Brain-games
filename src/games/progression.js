import gameEngine from '../index.js';
import getRandomNumber from '../utils.js';

const gameRules = 'What number is missing in the progression?';
const minLength = 5;
const maxLength = 10;
const minFirstEl = 1;
const maxFirstEl = 50;
const minStep = 2;
const maxStep = 25;

const generateProgression = (length, firstEl, step) => {
  const progression = [];
  let num = firstEl;
  while (progression.length < length) {
    progression.push(num);
    num += step;
  }

  return progression;
};

const generateGameData = () => {
  const length = getRandomNumber(minLength, maxLength);
  const firstEl = getRandomNumber(minFirstEl, maxFirstEl);
  const step = getRandomNumber(minStep, maxStep);
  const hiddenSymbol = getRandomNumber(0, length - 1);
  const progression = generateProgression(length, firstEl, step);
  const userAnswer = (progression.splice(hiddenSymbol, 1, '..')).toString();
  const question = `${progression.join(' ')}`;

  return [question, userAnswer];
};

export default () => {
  gameEngine(gameRules, generateGameData);
};
