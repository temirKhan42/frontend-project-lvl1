import readlineSync from 'readline-sync';

class GameProgression {
  constructor(userName) {
    this.userName = userName;
  }

  initiate() {
    let counter = 0;

    while (counter < 3) {
      this.generateProgression();
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

  static genRndm(max, start = 0) {
    return Math.floor(Math.random() * (max + 1) + start);
  }

  generateProgression() {
    const progLength = GameProgression.genRndm(5, 5);
    const progStart = GameProgression.genRndm(20);
    const progStep = GameProgression.genRndm(50, 1);
    const xStep = GameProgression.genRndm(progLength - 1);
    const progression = [];

    for (let i = 0; i < progLength; i += 1) {
      progression[i] = progStart + (i * progStep);
    }

    this.generateQuestion(progression, xStep);
  }

  generateQuestion(progression, xStep) {
    [this.correctAnswer] = progression.splice(xStep, 1, '..');
    this.progressionQ = progression.join(' ');
  }

  askQuestion() {
    console.log('Find the greatest common divisor of given numbers.');
    console.log(`Question: ${this.progressionQ}`);
    this.userAnswer = readlineSync.question('Your answer: ');
  }

  showLooseMessage() {
    console.log(`'${this.userAnswer}' is wrong answer ;(. Correct answer was '${this.correctAnswer}'.`);
    console.log(`Let's try again, ${this.userName}!`);
  }
}

export default GameProgression;
