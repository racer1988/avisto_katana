"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../services/utils");
class Deck {
    constructor(cardTypes) {
        this.cardTemplates = cardTypes;
        this.reset();
    }
    ;
    empty() {
        this.cards = [];
    }
    reset() {
        this.cards = [];
        this.cardTemplates.forEach((n, t) => {
            for (let i = 0; i < n; i++) {
                this.cards.push(t.clone());
            }
        });
        this.shuffle();
    }
    shuffle() {
        if (this.cards.length == 0) {
            return;
        }
        const shuffleCnt = utils_1.getRandomInt(this.cards.length / 2, this.cards.length - 1);
        for (let i = 0; i < shuffleCnt; i++) {
            const rndNo = utils_1.getRandomInt(0, this.cards.length - 1);
            const card = this.cards[i];
            this.cards[i] = this.cards[rndNo];
            this.cards[rndNo] = card;
        }
    }
    draw() {
        if (this.cards.length == 0) {
            return null;
        }
        return this.cards.splice(0, 1)[0];
    }
    drawLast() {
        if (this.cards.length == 0) {
            return null;
        }
        return this.cards.splice(this.cards.length - 1, 1)[0];
    }
    add(card) {
        this.cards.push(card);
    }
    isEmpty() {
        return this.cards.length == 0;
    }
}
exports.Deck = Deck;
class GameDeck extends Deck {
    empty() {
        this.cards = [];
    }
    draw() {
        if (this.cards.length == 0) {
            return null;
        }
        return this.cards.splice(0, 1)[0]; //TODO call super somehow and cast
    }
    drawLast() {
        if (this.cards.length == 0) {
            return null;
        }
        return this.cards.splice(this.cards.length - 1, 1)[0]; //TODO call super somehow and cast
    }
}
exports.GameDeck = GameDeck;
class CharacterDeck extends Deck {
    draw() {
        return this.cards.splice(0, 1)[0]; //TODO call super somehow and cast
    }
}
exports.CharacterDeck = CharacterDeck;
//# sourceMappingURL=deck.js.map