import greet from './cli.js';
import GameEven from '../games/even.js';
import GameCalc from '../games/calc.js';
import GameGcd from '../games/gcd.js';

class Games {
  constructor(gameName) {
    this.gameName = gameName;
  }

  initiate() {
    this.userName = greet();
    let game = null;

    if (this.gameName === 'even') {
      game = new GameEven(this.userName);
      game.initiate();
    } else if (this.gameName === 'calc') {
      game = new GameCalc(this.userName);
      game.initiate();
    } else if (this.gameName === 'gcd') {
      game = new GameGcd(this.userName);
      game.initiate();
    }
  }
}

export default Games;
