const Turn = require("../src/Turn");
const Card = require('../src/Card');

class Round {
    constructor(deck) {
        this.deck = deck.cards;
        this.turns = 0;
        this.incorrectGuesses = [];
        this.currentCard = deck.cards[0];
        this.turn;
    }

    returnCurrentCard() {
        return this.currentCard;
    }

    takeTurn(guess) {
      this.turns++;
      this.turn = new Turn(guess, this.currentCard);
      this.currentCard = this.deck[this.turns];
    }
}
module.exports = Round;
