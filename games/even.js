import readlineSync from 'readline-sync';

const getGeneratedNum = () => {
  const generatedNum = Math.round(Math.random() * 100);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log(`Question: ${generatedNum}`);

  return generatedNum;
};

const getUserAnswer = () => readlineSync.question('Your answer: ');

const getCorrectAnswer = (generatedNum) => {
  const correctAnswer = (generatedNum % 2) === 0 ? 'yes' : 'no';
  return correctAnswer;
};

const checkAnswer = (correctAnswer, userAnswer) => {
  let answer = '';
  for (let i = 0; i < userAnswer.length; i += 1) {
    const letter = userAnswer[i];
    answer += letter.toLowerCase();
  }

  return answer === correctAnswer;
};

const showLooseMessage = (userAnswer, correctAnswer, userName) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
};

const startEven = (userName) => {
  let counter = 0;

  while (counter < 3) {
    const generatedNum = getGeneratedNum();
    const userAnswer = getUserAnswer();
    const correctAnswer = getCorrectAnswer(generatedNum);
    const isAnswerRight = checkAnswer(correctAnswer, userAnswer);

    if (!isAnswerRight) {
      showLooseMessage(userAnswer, correctAnswer, userName);
      break;
    } else if (isAnswerRight) {
      console.log('Correct!');
      counter += 1;
    }
  }

  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default startEven;
