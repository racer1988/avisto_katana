"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deck_1 = require("./deck");
class Game {
    constructor() {
        this.players = [];
        this.discardedGameDeck = new deck_1.GameDeck(new Map());
    }
    orderedPlayers() {
        return this.players.sort((a, b) => a.position - b.position);
    }
    decks() {
        return [this.roleDeck, this.gameDeck, this.characterDeck];
    }
    nextPlayer() {
        let currIndex = 0;
        if (this.currentPlayer) {
            currIndex = this.orderedPlayers().indexOf(this.currentPlayer);
        }
        if (currIndex == this.players.length - 1) {
            currIndex = 0;
        }
        else {
            currIndex++;
        }
        this.currentPlayer = this.orderedPlayers()[currIndex];
        return this.currentPlayer;
    }
    start() {
        this.started = true;
        this.ended = false;
        this.nextPlayer();
    }
    end() {
        this.started = true;
        this.ended = true;
    }
    reset() {
        this.started = false;
        this.ended = false;
    }
}
exports.Game = Game;
exports.game = new Game();
//# sourceMappingURL=game.js.map