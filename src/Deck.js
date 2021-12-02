const Card = require('../src/Card');
const data1 = require('../src/data');
const cardData = data1.prototypeData;

class Deck {
  constructor(cardData) {
    this.cards = this.instatiateCards(cardData);
  }

  instatiateCards(cardData) {
    const cards1 = cardData.map(card => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer);
    })
    return cards1;
  }

  countCards() {
    return this.cards.length
  }
}
module.exports = Deck;
