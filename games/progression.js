import readlineSync from 'readline-sync';

const getRndm = (max, start = 0) => Math.floor(Math.random() * (max + 1) + start);

const getProgression = () => {
  const progLength = getRndm(5, 5);
  const progStart = getRndm(20);
  const progStep = getRndm(50, 1);
  const xNum = getRndm(progLength - 1);
  const progression = [];

  for (let i = 0; i < progLength; i += 1) {
    progression[i] = progStart + (i * progStep);
  }

  return { progression, xNum };
};

const transformProgression = ({ progression, xNum }) => {
  const progressionCopy = [...progression];
  const [correctAnswer] = progressionCopy.splice(xNum, 1, '..');
  const progressionString = progressionCopy.join(' ');
  return { progressionString, correctAnswer };
};

const getUserAnswer = ({ progressionString }) => {
  console.log('Find the greatest common divisor of given numbers.');
  console.log(`Question: ${progressionString}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

const showLooseMessage = (userAnswer, correctAnswer, userName) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
};

const startProgression = (userName) => {
  let counter = 0;

  while (counter < 3) {
    const progression = getProgression();
    const progressionObj = transformProgression(progression);
    const { correctAnswer } = progressionObj;
    const userAnswer = getUserAnswer(progressionObj);
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

export default startProgression;
