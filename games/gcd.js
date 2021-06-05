import readlineSync from 'readline-sync';

class Gcd {
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

  findGcd() {
    if (this.gcdNumbers.includes(0)) {
      if (this.gcdNumbers[0] === 0 && this.gcdNumbers[1] === 0) {
        this.correctAnswer = 0;
      } else if (this.gcdNumbers[0] === 0) {
        [, this.correctAnswer] = this.gcdNumbers;
      } else if (this.gcdNumbers[1] === 0) {
        [this.correctAnswer] = this.gcdNumbers;
      }

      return;
    }

    const numbsInOrder = this.gcdNumbers.slice();

    // Build numbers in the array in Descending order: [a, b], where a > b
    numbsInOrder.sort((a, b) => b - a);
    let [a, b] = numbsInOrder;
    let c = a % b;
    a = b;
    b = c;

    while (c !== 0) {
      c = a % b;
      a = b;
      b = c;
    }

    this.correctAnswer = a;
  }

  generateExpression() {
    this.gcdNumbers = [];

    for (let i = 0; i < 2; i += 1) {
      this.gcdNumbers[i] = Math.floor(Math.random() * 1001);
    }

    this.findGcd();
    this.gcdQuestion = `${this.gcdNumbers[0]} ${this.gcdNumbers[1]}`;
  }

  askQuestion() {
    console.log('Find the greatest common divisor of given numbers.');
    console.log(`Question: ${this.gcdQuestion}`);
    this.userAnswer = readlineSync.question('Your answer: ');
  }

  showLooseMessage() {
    console.log(`'${this.userAnswer}' is wrong answer ;(. Correct answer was '${this.correctAnswer}'.`);
    console.log(`Let's try again, ${this.userName}!`);
  }
}

export default Gcd;
