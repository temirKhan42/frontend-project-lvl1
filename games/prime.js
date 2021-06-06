import readlineSync from 'readline-sync';

const getPrimeNumbers = (range) => {
  const numbers = [];
  for (let i = 2; i <= range; i += 1) {
    numbers[i] = true;
  }

  let p = 2;
  while (p <= range) {
    for (let i = 0; (p * (p + i)) < numbers.length; i += 1) {
      const indexFalse = p * (p + i);
      numbers[indexFalse] = false;
    }

    let nextP = p;
    for (let i = nextP + 1; i < numbers.length; i += 1) {
      if (numbers[i] === true) {
        nextP = i;
        break;
      }
    }

    if (nextP === p) {
      break;
    }

    p = nextP;
  }

  const primeNumbers = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] === true) {
      primeNumbers.push(i);
    }
  }

  return primeNumbers;
};

const getRandom = (range) => Math.floor(Math.random() * range + 1);

const getUserAnswer = (randomNum) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  console.log(`Question: ${randomNum}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

const getCorrectAnswer = (primeNumbers, randomNum) => {
  const correctAnswer = primeNumbers.includes(randomNum) ? 'yes' : 'no';
  return correctAnswer;
};

const isAnswerRight = (correctAnswer, userAnswer) => {
  let answer = '';
  for (let i = 0; i < userAnswer.length; i += 1) {
    answer += userAnswer[i].toLowerCase();
  }

  return answer === correctAnswer;
};

const showLooseMessage = (userAnswer, correctAnswer, userName) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
};

const startPrime = (userName) => {
  let counter = 0;

  while (counter < 3) {
    const range = 1000;
    const randomNum = getRandom(range);
    const primeNumbers = getPrimeNumbers(range);
    const correctAnswer = getCorrectAnswer(primeNumbers, randomNum);
    const userAnswer = getUserAnswer(randomNum);
    const result = isAnswerRight(correctAnswer, userAnswer);

    if (!result) {
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

export default startPrime;
