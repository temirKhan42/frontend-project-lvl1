import readlineSync from 'readline-sync';

const getRndm = (max, start = 0) => Math.floor(Math.random() * (max + 1) + start);

const getCorrectAnswer = (expression) => {
  const { operands } = expression;
  const { operator } = expression;
  let correctAnswer;

  switch (operator) {
    case '+':
      correctAnswer = operands[0] + operands[1];
      break;
    case '-':
      correctAnswer = operands[0] - operands[1];
      break;
    case '*':
      correctAnswer = operands[0] * operands[1];
      break;
    default:
      correctAnswer = null;
  }

  return correctAnswer;
};

const generateExpression = () => {
  const operands = [];
  const operators = ['+', '-', '*'];

  for (let i = 0; i < 2; i += 1) {
    const operand = getRndm(100);
    operands[i] = operand;
  }

  const operator = operators[getRndm(2)];
  return { operands, operator };
};

const getUserAnswer = (expression) => {
  const a = expression.operands[0];
  const b = expression.operands[1];
  const { operator } = expression;

  console.log('What is the result of the expression?');
  console.log(`Question: ${a} ${operator} ${b}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

const showLooseMessage = (userAnswer, correctAnswer, userName) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
};

const startCalc = (userName) => {
  let counter = 0;

  while (counter < 3) {
    const expression = generateExpression();
    const userAnswer = getUserAnswer(expression);
    const correctAnswer = getCorrectAnswer(expression);
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

export default startCalc;
