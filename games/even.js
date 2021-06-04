import readlineSync from 'readline-sync';

class GameEven {
  constructor(name) {
    this.name = name;
  }

  initiate() {
    let counter = 0;

    while (counter < 3) {
      this.generateNumber();
      this.askQuestion();
      const isAnswerRight = this.checkAnswer();

      if (!isAnswerRight) {
        this.showLooseMessage();
        break;
      } else if (isAnswerRight) {
        console.log('Correct!');
        counter += 1;
      }
    }

    if (counter === 3) {
      console.log(`Congratulations, ${this.name}!`);
    }
  }

  generateNumber() {
    this.generatedNum = Math.round(Math.random() * 100);
  }

  askQuestion() {
    const message = 'Answer "yes" if the number is even, otherwise answer "no".';
    const quest = `Question: ${this.generatedNum}`;
    console.log(message);
    console.log(quest);
    this.userAnswer = readlineSync.question('Your answer: ');
  }

  checkAnswer() {
    this.correctAnswer = (this.generatedNum % 2) === 0 ? 'yes' : 'no';

    let answer = '';
    for (let i = 0; i < this.userAnswer.length; i += 1) {
      const letter = this.userAnswer[i];
      answer += letter.toLowerCase();
    }

    return answer === this.correctAnswer;
  }

  showLooseMessage() {
    console.log(`'${this.userAnswer}' is wrong answer ;(. Correct answer was '${this.correctAnswer}'.`);
    console.log(`Let's try again, ${this.name}!`);
  }
}

export default GameEven;
