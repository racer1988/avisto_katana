"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deck_1 = require("../entities/deck");
const card_1 = require("../entities/card");
const game_1 = require("../entities/game");
/* Performs only the initialization of the decks.
The rest of the logic should be into the game service.
 */
const initRoleDeck = function (players) {
    const RoleCards = new Map();
    RoleCards.set(new card_1.Card("shogun"), 1);
    switch (players) {
        case 4:
            RoleCards.set(new card_1.Card("samurai"), 1);
            RoleCards.set(new card_1.Card("ninja"), 2);
            break;
        case 5:
            RoleCards.set(new card_1.Card("samurai"), 1);
            RoleCards.set(new card_1.Card("ninja"), 1);
            RoleCards.set(new card_1.Card("ronin"), 1);
            break;
        case 6:
            RoleCards.set(new card_1.Card("samurai"), 1);
            RoleCards.set(new card_1.Card("ronin"), 1);
            RoleCards.set(new card_1.Card("ninja"), 3);
            break;
        case 7:
            RoleCards.set(new card_1.Card("samurai"), 2);
            RoleCards.set(new card_1.Card("ronin"), 1);
            RoleCards.set(new card_1.Card("ninja"), 3);
            break;
    }
    game_1.game.roleDeck = new deck_1.Deck(RoleCards);
};
const initGameDeck = function () {
    const GameCards = new Map();
    GameCards.set(new card_1.GameCard("attaque_rapide", card_1.CardType.Permanent), 3);
    GameCards.set(new card_1.GameCard("cerimonie_du_the", card_1.CardType.Action), 4);
    GameCards.set(new card_1.GameCard("code_du_bushido", card_1.CardType.Permanent), 2);
    GameCards.set(new card_1.GameCard("concentration", card_1.CardType.Permanent), 6);
    GameCards.set(new card_1.GameCard("armure", card_1.CardType.Permanent), 4);
    GameCards.set(new card_1.GameCard("cri_de_guerre", card_1.CardType.Action), 4);
    GameCards.set(new card_1.GameCard("daimyo", card_1.CardType.Action), 3);
    GameCards.set(new card_1.GameCard("diversion", card_1.CardType.Action), 5);
    GameCards.set(new card_1.GameCard("geisha", card_1.CardType.Action), 6);
    GameCards.set(new card_1.GameCard("meditation", card_1.CardType.Action), 3);
    GameCards.set(new card_1.GameCard("ju_jitsu", card_1.CardType.Action), 3);
    GameCards.set(new card_1.GameCard("parade", card_1.CardType.Action), 15);
    GameCards.set(new card_1.WeaponCard("bokken", card_1.CardType.Weapon, 1, 1), 6);
    GameCards.set(new card_1.WeaponCard("shuriken", card_1.CardType.Weapon, 3, 1), 3);
    GameCards.set(new card_1.WeaponCard("kusarigama", card_1.CardType.Weapon, 2, 2), 4);
    GameCards.set(new card_1.WeaponCard("kiseru", card_1.CardType.Weapon, 1, 2), 5);
    GameCards.set(new card_1.WeaponCard("bo", card_1.CardType.Weapon, 2, 1), 5);
    GameCards.set(new card_1.WeaponCard("daikyu", card_1.CardType.Weapon, 5, 2), 1);
    GameCards.set(new card_1.WeaponCard("katana", card_1.CardType.Weapon, 2, 3), 1);
    GameCards.set(new card_1.WeaponCard("naginata", card_1.CardType.Weapon, 4, 1), 2);
    GameCards.set(new card_1.WeaponCard("wakizashi", card_1.CardType.Weapon, 1, 3), 4);
    GameCards.set(new card_1.WeaponCard("nagayari", card_1.CardType.Weapon, 4, 2), 4);
    GameCards.set(new card_1.WeaponCard("nodachi", card_1.CardType.Weapon, 3, 3), 4);
    GameCards.set(new card_1.WeaponCard("kanabo", card_1.CardType.Weapon, 3, 2), 4);
    GameCards.set(new card_1.WeaponCard("tanegashima", card_1.CardType.Weapon, 5, 1), 4);
    game_1.game.gameDeck = new deck_1.GameDeck(GameCards);
};
const initCharacterDeck = function () {
    const CharCards = new Map();
    CharCards.set(new card_1.CharacterCard("nobunaga", 5), 1);
    CharCards.set(new card_1.CharacterCard("musashi", 5), 1);
    CharCards.set(new card_1.CharacterCard("hanzo", 4), 1);
    CharCards.set(new card_1.CharacterCard("goemon", 5), 1);
    CharCards.set(new card_1.CharacterCard("benkei", 5), 1);
    CharCards.set(new card_1.CharacterCard("ieyasu", 5), 1);
    CharCards.set(new card_1.CharacterCard("tomoe", 5), 1);
    CharCards.set(new card_1.CharacterCard("hideyoshi", 4), 1);
    CharCards.set(new card_1.CharacterCard("chiyome", 4), 1);
    CharCards.set(new card_1.CharacterCard("ginchiyo", 4), 1);
    CharCards.set(new card_1.CharacterCard("kojiro", 5), 1);
    CharCards.set(new card_1.CharacterCard("ushiwaka", 4), 1);
    game_1.game.characterDeck = new deck_1.CharacterDeck(CharCards);
};
exports.initDecks = function (players) {
    initRoleDeck(players);
    initGameDeck();
    initCharacterDeck();
    game_1.game.discardedGameDeck.empty();
    game_1.game.decks().forEach(d => d.reset());
};
//# sourceMappingURL=initDecksService.js.map