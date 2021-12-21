import readlineSync from 'readline-sync';

const gameRoundsCount = 3;

const gameEngine = (gameRule, generateGameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameRule);

  for (let count = 1; count <= gameRoundsCount; count += 1) {
    const [question, rightAnswer] = generateGameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Answer: ');
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameEngine;
