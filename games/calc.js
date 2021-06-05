import readlineSync from 'readline-sync';

class Calc {
  constructor(userName) {
    this.userName = userName;
  }

  initiate() {
    let counter = 0;

    while (counter < 3) {
      this.generateExpression();
      this.askQuestion();
      const isAnswerRight = this.correctAnswer === Number(this.userAnswer);

      if (!isAnswerRight) {
        this.showLooseMessage();
        break;
      } else {
        console.log('Correct!');
        counter += 1;
      }
    }

    if (counter === 3) {
      console.log(`Congratulations, ${this.userName}!`);
    }
  }

  static getRndm(max, start = 0) {
    return Math.floor(Math.random() * (max + 1) + start);
  }

  solveExp(operands, operator) {
    switch (operator) {
      case '+':
        this.correctAnswer = operands[0] + operands[1];
        break;
      case '-':
        this.correctAnswer = operands[0] - operands[1];
        break;
      case '*':
        this.correctAnswer = operands[0] * operands[1];
        break;
      default:
        this.correctAnswer = null;
    }
  }

  generateExpression() {
    const operands = [];
    const operators = ['+', '-', '*'];

    for (let i = 0; i < 2; i += 1) {
      const operand = Calc.getRndm(100);
      operands[i] = operand;
    }

    const operator = operators[Calc.getRndm(2)];
    this.solveExp(operands, operator);
    this.generatedExp = `${operands[0]} ${operator} ${operands[1]}`;
  }

  askQuestion() {
    console.log('What is the result of the expression?');
    console.log(`Question: ${this.generatedExp}`);
    this.userAnswer = readlineSync.question('Your answer: ');
  }

  showLooseMessage() {
    console.log(`'${this.userAnswer}' is wrong answer ;(. Correct answer was '${this.correctAnswer}'.`);
    console.log(`Let's try again, ${this.userName}!`);
  }
}

export default Calc;
