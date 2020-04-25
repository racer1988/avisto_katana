"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const card_1 = require("./card");
class Player {
    constructor(id) {
        this.hand = [];
        this.game = [];
        this.id = id;
    }
    get character() {
        return this._character;
    }
    set character(value) {
        this._character = value;
        this.lifePoints = value.lifePoints;
    }
    reset() {
        this.hand = [];
        this.game = [];
    }
    playCard(pos) {
        if (pos > this.hand.length - 1) {
            return null;
        }
        const card = this.hand.splice(pos, 1)[0];
        if (card.cardType == card_1.CardType.Permanent) {
            this.game.push(card);
        }
        return card;
    }
    removeCardFromGame(pos) {
        if (pos > this.game.length - 1) {
            return null;
        }
        return this.game.splice(pos, 1)[0];
    }
}
exports.Player = Player;
//# sourceMappingURL=player.js.map