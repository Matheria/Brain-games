import gameEngine from '../index.js';
import getRandomNumber from '../utils.js';

const gameRule = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const minNum = 1;
const maxNum = 100;

const calculation = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const generateGameData = () => {
  const number1 = getRandomNumber(minNum, maxNum);
  const number2 = getRandomNumber(minNum, maxNum);
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${number1} ${operator} ${number2}`;
  const userAnswer = calculation(number1, number2, operator).toString();

  return [question, userAnswer];
};

export default () => {
  gameEngine(gameRule, generateGameData);
};
