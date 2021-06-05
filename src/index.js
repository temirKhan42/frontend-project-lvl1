import greet from './cli.js';
import Even from '../games/even.js';
import Calc from '../games/calc.js';
import Gcd from '../games/gcd.js';
import Progression from '../games/progression.js';
import Prime from '../games/prime.js';

class Games {
  constructor(gameName) {
    this.gameName = gameName;
  }

  initiate() {
    this.userName = greet();
    let game = null;

    if (this.gameName === 'even') {
      game = new Even(this.userName);
      game.initiate();
    } else if (this.gameName === 'calc') {
      game = new Calc(this.userName);
      game.initiate();
    } else if (this.gameName === 'gcd') {
      game = new Gcd(this.userName);
      game.initiate();
    } else if (this.gameName === 'progression') {
      game = new Progression(this.userName);
      game.initiate();
    } else if (this.gameName === 'prime') {
      game = new Prime(this.userName);
      game.initiate();
    }
  }
}

export default Games;
