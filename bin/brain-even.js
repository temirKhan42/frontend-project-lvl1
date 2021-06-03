#!/usr/bin/env node
import greet from '../src/cli.js';
import GameEven from '../src/even.js';

const name = greet();
const gameEven = new GameEven(name);
gameEven.initiate();
