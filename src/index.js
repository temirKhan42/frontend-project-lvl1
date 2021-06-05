import greet from './cli.js';
import startEven from '../games/even.js';
import startCalc from '../games/calc.js';
import Gcd from '../games/gcd.js';
import Progression from '../games/progression.js';
import Prime from '../games/prime.js';

const startGame = (gameName) => {
  const userName = greet();
  let game = null;

  if (gameName === 'even') {
    startEven(userName);
  } else if (gameName === 'calc') {
    startCalc(userName);
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
