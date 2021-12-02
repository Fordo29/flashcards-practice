const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');



describe('Turn', function() {
  let card;
  let turn;

  beforeEach(function() {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn = new Turn('object', card);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a guess', function() {
    const turn = new Turn('object');
    expect(turn.guess).to.equal('object');
  });

  it('should store a guess as a string', function() {
    const turn = new Turn('object');
    expect(turn.guess).to.be.a('string');
  });

  it('should store an instance of a Card', function() {
    expect(turn.card).to.equal(card);
  });

  it('should store Card as an object', function() {
    expect(turn.card).to.be.a('object');
  });

  it('should be a function that returns a guess', function() {
    expect(turn.returnGuess()).to.equal('object');
  });

  it('should be a function that returns an instance of the object card', function() {
    expect(turn.returnCard()).to.equal(card);
  });

  it('should evaluateGuess function to return a boolean', function () {
    expect(turn.evaluateGuess()).to.be.a('boolean');
  });

  it('should evaluateGuess function returns if the guess was right or wrong', function() {
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should be able to give feedback on incorrect guess', function() {
    const turn = new Turn('function', card);
    expect(turn.giveFeedback()).to.equal("incorrect!");
  });

  it('should be able to give feedback on correct guess', function() {
    const turn = new Turn('object', card);
    expect(turn.giveFeedback()).to.equal("correct!");
  });
});
