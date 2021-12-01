const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const data = require('../src/data')


describe('Deck', function() {
  let card;
  let turn;
  let deck;
  let cards = [];

  beforeEach(function() {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn = new Turn('object', card);
    deck = new Deck(data.prototypeData);
  });

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should store the array of cards', function() {
    expect(deck.cards).to.be.an('array');
  });

  it('should count the cards in the Deck', function() {
    expect(deck.countCards()).to.equal(30);
  });
});
