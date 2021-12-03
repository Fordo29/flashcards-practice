const Card = require('../src/Card');
const data1 = require('../src/data');
const cardData = data1.prototypeData;

class Deck {
  constructor(cards) {
    this.cards = cards;
  }

  countCards() {
    return this.cards.length
  }
}
module.exports = Deck;
