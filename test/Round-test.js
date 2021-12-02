const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const data = require('../src/test-data');
const Round = require('../src/Round');

describe('Round Class Properties', function() {
  let card;
  let turn;
  let deck;
  let round;

  beforeEach(function() {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn = new Turn('object', card);
    deck = new Deck(data.prototypeTestData);
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

  it('should store a a deck of cards', function() {
    expect(round.deck).to.deep.equal(deck.cards);
  });

  it('should have a property of turns that starts at a default of zero', function() {
    expect(round.turns).to.equal(0);
  });

  it('should store an array of incorrect guesses as an array', function() {
    expect(round.incorrectGuesses).to.be.an('array');
  });
});

describe('Round Class Methods', function() {
  let card;
  let turn;
  let deck;
  let round;

  beforeEach(function() {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn = new Turn('object', card);
    deck = new Deck(data.prototypeTestData);
    round = new Round(deck);
    });

  it('should return the current card being played', function() {
    round.returnCurrentCard();
    expect(round.currentCard).to.equal(deck.cards[round.turns]);
  });

  it('should increase turns count by one', function() {
    round.takeTurn('object');
    expect(round.turns).to.equal(1);
  });

  it('should create a new instance of Turn', function() {
    round.takeTurn('object');
    expect(round.turn).to.be.an('object');
  });

  it('should go on to the next card for the next turn', function() {
    round.takeTurn('array');
    expect(round.currentCard).to.equal(deck.cards[round.turns]);
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
    round.takeTurn('function');
    expect(round.turn.giveFeedback()).to.equal("incorrect!");
  });

  it('should give feedback indicating the guess is correct', function() {
    round.takeTurn('object');
    expect(round.turn.giveFeedback()).to.equal("correct!");
  });

  it('should store the percent correct guesses', function() {
    round.takeTurn('object');
    round.takeTurn('what?');
    expect(round.calculatePercentCorrect()).to.equal(50);
  });

  it('should end the round and show the user the percent correct', function() {
    round.takeTurn('object');
    round.takeTurn('what?');
    round.calculatePercentCorrect();
    expect(round.endRound()).to.equal('** Round over! ** You answered 50% of the questions correctly!');
  });
});
