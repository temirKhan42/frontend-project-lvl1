import greet from './cli.js';
import startEven from '../games/even.js';
import startCalc from '../games/calc.js';
import startGcd from '../games/gcd.js';
import startProgression from '../games/progression.js';
import startPrime from '../games/prime.js';

const startGame = (gameName) => {
  const userName = greet();

  if (gameName === 'even') {
    startEven(userName);
  } else if (gameName === 'calc') {
    startCalc(userName);
  } else if (gameName === 'gcd') {
    startGcd(userName);
  } else if (gameName === 'progression') {
    startProgression(userName);
  } else if (gameName === 'prime') {
    startPrime(userName);
  }
};

export default startGame;
