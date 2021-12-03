const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const data = require('../src/test-data');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game Class Properties', function() {
  let card;
  let turn;
  let deck;
  let round;
  let game;

  beforeEach(function() {
    // card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    // turn = new Turn('object', card);
    deck = new Deck(data.prototypeTestData);
    round = new Round(deck);
    game = new Game();
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should keep track of the current round', function() {
    expect(game.currentRound).to.be.an('object');
  });

  it('should have a function that starts the game', function() {
    expect(game.start).to.be.a('function');
  });

  it.skip('should create cards at the start of the game', function() {
    expect(game.currentRound).to.be.anInstanceOf(Round);
  });

  it.skip('should create a new round at the start of the game', function() {
    game.start();
    expect(game.round).to.be.instanceOf(Round);
  });

});
