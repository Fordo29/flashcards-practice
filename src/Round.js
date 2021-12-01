const Turn = require("../src/Turn");
const Card = require('../src/Card');

class Round {
    constructor(deck) {
        this.deck = deck.cards;
        this.turns = 0;
        this.incorrectGuesses = [];
        this.currentCard = deck.cards[0];
    }

    returnCurrentCard() {
        return this.currentCard;
    }


}
module.exports = Round;
