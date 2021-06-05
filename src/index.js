import greet from './cli.js';
import Even from '../games/even.js';
import Calc from '../games/calc.js';
import Gcd from '../games/gcd.js';
import Progression from '../games/progression.js';
import Prime from '../games/prime.js';

const startGame = (gameName) => {
  const userName = greet();
  let game = null;

  if (gameName === 'even') {
    game = new Even(userName);
    game.initiate();
  } else if (gameName === 'calc') {
    game = new Calc(userName);
    game.initiate();
  } else if (gameName === 'gcd') {
    game = new Gcd(userName);
    game.initiate();
  } else if (gameName === 'progression') {
    game = new Progression(userName);
    game.initiate();
  } else if (gameName === 'prime') {
    game = new Prime(userName);
    game.initiate();
  }
};

export default startGame;
