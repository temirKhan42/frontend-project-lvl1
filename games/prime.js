import readlineSync from 'readline-sync';

class GamePrime {
  constructor(userName) {
    this.userName = userName;
  }

  initiate() {
    let counter = 0;

    while (counter < 3) {
      this.generateQuestion(1000);
      this.generatePrimeNumbers();
      this.askQuestion();
      const isAnswerRight = this.checkAnswer();

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

  generatePrimeNumbers() {
    const numbers = [];
    for (let i = 2; i <= this.range; i += 1) {
      numbers[i] = true;
    }

    let p = 2;
    while (p <= this.range) {
      for (let i = 0; (p * (p + i)) < numbers.length; i += 1) {
        const idxFalse = p * (p + i);
        numbers[idxFalse] = false;
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

    this.primeNumbers = [];
    for (let i = 0; i < numbers.length; i += 1) {
      if (numbers[i] === true) {
        this.primeNumbers.push(i);
      }
    }
  }

  generateQuestion(range) {
    this.range = range;
    this.primeQ = Math.floor(Math.random() * this.range + 1);
  }

  askQuestion() {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    console.log(`Question: ${this.primeQ}`);
    this.userAnswer = readlineSync.question('Your answer: ');
  }

  checkAnswer() {
    this.correctAnswer = this.primeNumbers.includes(this.primeQ) ? 'yes' : 'no';

    let answer = '';
    for (let i = 0; i < this.userAnswer.length; i += 1) {
      answer += this.userAnswer[i].toLowerCase();
    }

    return answer === this.correctAnswer;
  }

  showLooseMessage() {
    console.log(`'${this.userAnswer}' is wrong answer ;(. Correct answer was '${this.correctAnswer}'.`);
    console.log(`Let's try again, ${this.userName}!`);
  }
}

export default GamePrime;
