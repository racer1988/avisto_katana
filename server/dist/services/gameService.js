"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const card_1 = require("../entities/card");
const game_1 = require("../entities/game");
const players = game_1.game.players;
const drawGameCard = function () {
    const card = game_1.game.gameDeck.draw();
    if (game_1.game.gameDeck.isEmpty()) {
        // If card is null we are at the end of the deck.
        // Remove 1 honorpoint from each player and check if someone is at zero
        for (let i = 0; i < game_1.game.players.length; i++) {
            const p = game_1.game.players[i];
            p.honorPoints--;
            if (p.honorPoints == 0) {
                game_1.game.end();
                return null;
            }
        }
        //If not, shuffle the discarded into the game deck and restart
        game_1.game.gameDeck = game_1.game.discardedGameDeck;
        game_1.game.discardedGameDeck.empty();
        game_1.game.gameDeck.shuffle();
    }
    return card;
};
exports.endTurn = function () {
    return game_1.game.nextPlayer();
};
exports.getPlayer = function (id) {
    return players.find(p => p.id == id);
};
exports.drawCard = function (id) {
    const player = players.find(p => p.id == id);
    const card = drawGameCard();
    card && player.hand.push(card);
    return player;
};
exports.drawDiscarded = function (id) {
    const player = players.find(p => p.id == id);
    const card = game_1.game.discardedGameDeck.drawLast();
    player.hand.push(card);
    return player;
};
exports.playCard = function (id, pos) {
    const player = players.find(p => p.id == id);
    const card = player.playCard(pos);
    if (card && card.cardType != card_1.CardType.Permanent) {
        game_1.game.discardedGameDeck.add(card);
    }
    return card;
};
exports.discardCard = function (id, pos) {
    const player = players.find(p => p.id == id);
    const card = player.removeCardFromGame(pos);
    game_1.game.discardedGameDeck.add(card);
    return card;
};
//# sourceMappingURL=gameService.js.map