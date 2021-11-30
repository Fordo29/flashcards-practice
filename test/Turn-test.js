const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
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

  it('should store an instance of a Card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn.card).to.equal(card);
  });

  it('should be a function that returns a guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    turn.returnGuess();
    expect(turn.returnGuess()).to.equal('object');
  });

  it('should be a function that returns an instance of the object card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    turn.returnCard();
    expect(turn.returnCard()).to.equal(card);
  });

  it.skip('should evaluate guess to be true or false', function() {
    
  })

  it.skip('should should be able to give feedback on guess', function() {

  })

});
