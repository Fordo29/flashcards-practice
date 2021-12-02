const Turn = require("../src/Turn");
const Card = require('../src/Card');
const Deck = require('../src/Deck');

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
        return this.currentCard[this.turns];
    }

    takeTurn(guess) {
      this.turns++;
      this.turn = new Turn(guess, this.currentCard);
      this.currentCard = this.deck[this.turns];

      const answer = this.turn.evaluateGuess();
      if(!answer) {
        this.incorrectGuesses.push(this.currentCard.id);
      }
      this.turn.giveFeedback(answer);
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
