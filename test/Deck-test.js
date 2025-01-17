const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const data = require('../src/data')


describe('Deck', function() {
  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck(data.prototypeData);
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should store the array of cards', function() {
    const deck = new Deck(data.prototypeData);
    expect(deck.cards).to.be.an('array');
  });

  it('should count the cards in the Deck', function() {
    const deck = new Deck(data.prototypeData);
    expect(deck.countCards()).to.equal(30);
  });
});
