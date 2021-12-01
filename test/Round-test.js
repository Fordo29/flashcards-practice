const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const data = require('../src/data');
const Round = require('../src/Round');

describe('Round', function() {
  let card;
  let turn;
  let deck;
  let round;

  beforeEach(function() {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn = new Turn('object', card);
    deck = new Deck(data.prototypeData);
    round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should store an instance of Deck', function() {
    expect(round.deck).to.be.an('array');
  });

  it('should have a property of turns that starts at a default of zero', function() {
    expect(round.turns).to.equal(0);
  });

  it('should store an array of incorrect guesses as an array', function() {
    expect(round.incorrectGuesses).to.be.an('array');
  });

  it('should return the current being played', function() {
    expect(round.returnCurrentCard()).to.equal(card);
  });

  it.skip('should increase turns count by one', function() {
    
  });

  it.skip('should create a new instance of Turn', function() {
    
  });

  it.skip('should update the next card to be the current card', function() {
    
  });

    it.skip('should update and store incorrect guesses in an array', function() {
    
  });

  it.skip('should store the percent correct guesses', function() {
    
  });

  it.skip('should end round and display precent correct guesses', function() {
    
  });

  it.skip('should ', function() {
    
  });
});
