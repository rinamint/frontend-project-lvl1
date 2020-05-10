import generateRandomNum from '../utils.js';
import run from '../gameEngine.js';

const description = 'Find the greatest common divisor of given numbers.';

const findTheGreatestDivider = (num1, num2) => {
  let result = 0;
  for (let i = 1; i <= num1 || i <= num2; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      result = i;
    }
  }
  return String(result);
};

const generateRound = () => {
  const randomNum1 = generateRandomNum(1, 30);
  const randomNum2 = generateRandomNum(1, 30);
  const rightAnswer = findTheGreatestDivider(randomNum1, randomNum2);
  const askUser = [randomNum1, randomNum2].join(' ');
  return [askUser, rightAnswer];
};

export default () => {
  run(description, generateRound);
};
