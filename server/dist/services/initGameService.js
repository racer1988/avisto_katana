"use strict";
const __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    const result = {};
    if (mod != null) for (const k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const game_1 = require("../entities/game");
const player_1 = require("../entities/player");
const constants_1 = require("./constants");
const initDeckService = __importStar(require("./initDecksService"));
const utils_1 = require("./utils");
const getShogun = function () {
    return game_1.game.players.find(p => p.role.cardName == constants_1.RoleShogun);
};
const giveHands = function () {
    const ps = game_1.game.orderedPlayers();
    Array.from(Array(4)).forEach(() => ps[0].hand.push(game_1.game.gameDeck.draw()));
    for (let i = 1; i < ps.length; i++) {
        if (i == 1 || i == 2) {
            Array.from(Array(5)).forEach(() => ps[i].hand.push(game_1.game.gameDeck.draw()));
        }
        else if (i == 3 || i == 4) {
            Array.from(Array(6)).forEach(() => ps[i].hand.push(game_1.game.gameDeck.draw()));
        }
        else if (i == 5 || i == 6) {
            Array.from(Array(7)).forEach(() => ps[i].hand.push(game_1.game.gameDeck.draw()));
        }
    }
};
const initPositions = function (ps) {
    const positions = Array.from(new Array(ps.length), (x, i) => i);
    const shuffleCnt = utils_1.getRandomInt(0, positions.length - 1);
    for (let i = 0; i < shuffleCnt; i++) {
        const rndNo = utils_1.getRandomInt(0, positions.length - 1);
        const position = positions[i];
        positions[i] = positions[rndNo];
        positions[rndNo] = position;
    }
    for (let i = 0; i < positions.length; i++) {
        ps[i].position = positions[i];
    }
    //Shogun always first
    const shogun = getShogun();
    const first = ps.find(p => p.position == 0);
    first.position = shogun.position;
    shogun.position = 0;
};
const initHonorPoints = function () {
    const ps = game_1.game.players;
    const otherHP = ps.length < 6 ? 3 : 4;
    ps.forEach(p => p.honorPoints = otherHP);
    //Override for the shogun
    const shogun = getShogun();
    shogun.honorPoints = 5;
};
exports.addPlayer = function (id) {
    const players = game_1.game.players;
    let player = players.find(p => p.id == id);
    if (!player) {
        players.push(new player_1.Player(id));
        player = players[players.length - 1];
    }
    return player;
};
exports.initGame = function () {
    game_1.game.reset();
    const ps = game_1.game.players;
    initDeckService.initDecks(ps.length);
    ps.forEach(p => {
        p.role = game_1.game.roleDeck.draw();
        p.character = game_1.game.characterDeck.draw();
        p.reset();
    });
    initHonorPoints();
    initPositions(ps);
    giveHands();
    game_1.game.start();
};
//# sourceMappingURL=initGameService.js.map