import readlineSync from 'readline-sync';
import getRandomNumber from '../utils.js';

const gameRules = 'What is the result of the expression?';
const gameRounds = 3;
const operators = ['+', '-', '*'];

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

const brainCalcGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameRules);

  for (let count = 1; count <= gameRounds; count += 1) {
    const number1 = getRandomNumber(1, 10);
    const number2 = getRandomNumber(1, 10);
    const operator = operators[getRandomNumber(0, operators.length - 1)];
    const question = `Question: ${number1} ${operator} ${number2}`;
    console.log(question);
    const calculationResult = calculation(number1, number2, operator).toString();
    const userAnswer = readlineSync.question('Answer: ');
    if (userAnswer === calculationResult) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${calculationResult}'.`);
      return console.log(`Let's try again, ${name}`);
    }
  }

  return console.log(`Congratulations, ${name}`);
};

export default brainCalcGame;
