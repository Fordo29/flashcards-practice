const Turn = require("../src/Turn");
const Card = require('../src/Card');

class Round {
    constructor(deck) {
        this.deck = deck.cards;
        this.turns = 0;
        this.incorrectGuesses = [];
        this.currentCard = deck.cards[0];
        this.turn;
        this.percentCorrect = 0;
    }

    returnCurrentCard() {
        return this.currentCard;
    }

    takeTurn(guess) {
      this.turn = new Turn(guess, this.currentCard);
      this.turns++;
      this.currentCard = this.deck[this.turns];

      if(!this.turn.evaluateGuess()) {
        this.incorrectGuesses.push(this.currentCard.id);
      }
      this.turn.giveFeedback();
    }

    calculatePercentCorrect() {
      this.percentCorrect = Math.round(((this.turns - this.incorrectGuesses.length) / this.turns) * 100);
      return this.percentCorrect
    }

    endRound() {
      return `** Round over! ** You answered ${this.percentCorrect}% of the questions correctly!`;
    }
}
module.exports = Round;
