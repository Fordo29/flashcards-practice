const Turn = require("../src/Turn");
const Card = require('../src/Card');

class Round {
    constructor(deck) {
        this.deck = deck.cards;
        // this.turn = new Turn("object", card);
        this.turns = 0;
        this.incorrectGuesses = [];
    }

    returnCurrentCard() {
        console.log(this.deck.cards);
        return this.deck.cards[0];
    }

    
}
module.exports = Round;