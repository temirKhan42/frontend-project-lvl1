import readlineSync from 'readline-sync';

const getCorrectAnswer = (gcdNumbers) => {
  let correctAnswer = null;

  if (gcdNumbers.includes(0)) {
    if (gcdNumbers[0] === 0 && gcdNumbers[1] === 0) {
      correctAnswer = 0;
    } else if (gcdNumbers[0] === 0) {
      [, correctAnswer] = gcdNumbers;
    } else if (gcdNumbers[1] === 0) {
      [correctAnswer] = gcdNumbers;
    }

    return correctAnswer;
  }

  const numbersInOrder = gcdNumbers.slice();

  // Build numbers in the array in Descending order: [a, b], where a > b
  numbersInOrder.sort((a, b) => b - a);
  let [a, b] = numbersInOrder;
  let c = a % b;
  a = b;
  b = c;

  while (c !== 0) {
    c = a % b;
    a = b;
    b = c;
  }

  return a;
};

const getGcdNumbers = () => {
  const gcdNumbers = [];

  for (let i = 0; i < 2; i += 1) {
    gcdNumbers[i] = Math.floor(Math.random() * 1001);
  }

  return gcdNumbers;
};

const getUserAnswer = (gcdNumbers) => {
  const gcdQuestion = `${gcdNumbers[0]} ${gcdNumbers[1]}`;
  console.log('Find the greatest common divisor of given numbers.');
  console.log(`Question: ${gcdQuestion}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

const showLooseMessage = (userAnswer, correctAnswer, userName) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
};

const startGcd = (userName) => {
  let counter = 0;

  while (counter < 3) {
    const gcdNumbers = getGcdNumbers();
    const correctAnswer = getCorrectAnswer(gcdNumbers);
    const userAnswer = getUserAnswer(gcdNumbers);
    const isAnswerRight = correctAnswer === Number(userAnswer);

    if (!isAnswerRight) {
      showLooseMessage(userAnswer, correctAnswer, userName);
      break;
    } else {
      console.log('Correct!');
      counter += 1;
    }
  }

  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default startGcd;
