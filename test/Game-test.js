const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');

describe('Game Class Properties', function() {
  let game;

  beforeEach(function() {
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
});
