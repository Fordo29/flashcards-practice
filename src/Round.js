const Turn = require("../src/Turn");
const Card = require('../src/Card');
const Deck = require('../src/Deck');

class Round {
    constructor(deck) {
        this.deck = deck;
        this.turns = 0;
        this.incorrectGuesses = [];
    }

    returnCurrentCard() {
        return this.deck.cards[this.turns];
    }

    takeTurn(guess) {
      const turn = new Turn(guess, this.deck.cards[this.turns]);
      this.turns++;

      if(!turn.evaluateGuess()) {
        this.incorrectGuesses.push(this.deck.cards[this.turns].id);
      }
      return turn.giveFeedback();
    }

    calculatePercentCorrect() {
      return Math.round(((this.turns - this.incorrectGuesses.length) / this.turns) * 100);
    }

    endRound() {
      this.turns = 0;
      console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    }
}
module.exports = Round;
