const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const data = require('../src/test-data');
const Round = require('../src/Round');

describe('Round Class Properties', function() {
  let deck;
  let round;

  beforeEach(function() {
    deck = new Deck(data.prototypeTestData);
    round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should store a Deck of cards', function() {
    expect(round.deck.cards).to.be.an('array');
  });

  it('should have a property of turns that starts at a default of zero', function() {
    expect(round.turns).to.equal(0);
  });

  it('should store an array of incorrect guesses as an array', function() {
    expect(round.incorrectGuesses).to.be.an('array');
  });
});

describe('Round Class Methods', function() {
  let deck;
  let round;

  beforeEach(function() {
    deck = new Deck(data.prototypeTestData);
    round = new Round(deck);
  });

  it('should return the current card being played', function() {
    expect(round.returnCurrentCard()).to.equal(round.deck.cards[0]);
  });

  it('should increase turns count by one', function() {
    round.takeTurn('object');
    expect(round.turns).to.equal(1);
  });

  it('should go on to the next card for the next turn', function() {
    round.takeTurn('array');
    expect(round.returnCurrentCard()).to.equal(round.deck.cards[1]);
  });

  it('should update and store incorrect guesses in an array', function() {
    round.takeTurn('object');
    expect(round.incorrectGuesses.length).to.equal(0);
    round.takeTurn('function');
    expect(round.incorrectGuesses.length).to.equal(1);
    round.takeTurn('function');
    expect(round.incorrectGuesses.length).to.equal(2);
  });

  it('should give feedback indicating the guess is wrong', function() {
    expect(round.takeTurn('what?')).to.equal("incorrect!");
  });

  it('should give feedback indicating the guess is correct', function() {
    expect(round.takeTurn('object')).to.equal("correct!");
  });

  it('should store the percent correct guesses', function() {
    round.takeTurn('object');
    round.takeTurn('what?');
    expect(round.calculatePercentCorrect()).to.equal(50);
  });
});
