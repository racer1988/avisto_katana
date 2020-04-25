"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let CardType;
(function (CardType) {
    // The names are mapped to folder in the UI. BEWARE!
    CardType["Weapon"] = "weapon";
    CardType["Permanent"] = "permanent";
    CardType["Action"] = "action";
})(CardType = exports.CardType || (exports.CardType = {}));
class Card {
    constructor(cardName) {
        this.cardName = cardName || "";
    }
    ;
    clone(card) {
        if (!card) {
            card = new Card();
        }
        card.cardName = this.cardName;
        return card;
    }
    ;
}
exports.Card = Card;
;
class CharacterCard extends Card {
    constructor(cardName, lifePoints) {
        super(cardName);
        this.lifePoints = 0;
        this.lifePoints = lifePoints || 0;
    }
    ;
    clone(card) {
        if (!card) {
            card = new CharacterCard();
        }
        super.clone(card);
        if (card instanceof CharacterCard) {
            card.lifePoints = this.lifePoints;
        }
        return card;
    }
    ;
}
exports.CharacterCard = CharacterCard;
class GameCard extends Card {
    constructor(cardName, cardType) {
        super(cardName);
        this.cardType = cardType || null;
    }
    ;
    clone(card) {
        if (!card) {
            card = new GameCard();
        }
        super.clone(card);
        if (card instanceof GameCard) {
            card.cardType = this.cardType || null;
        }
        return card;
    }
    ;
}
exports.GameCard = GameCard;
class WeaponCard extends GameCard {
    constructor(cardName, cardType, range, strength) {
        super(cardName, cardType);
        this.range = range || 0;
        this.strength = strength || 0;
    }
    ;
    clone(card) {
        if (!card) {
            card = new WeaponCard();
        }
        super.clone(card);
        if (card instanceof WeaponCard) {
            card.range = this.range;
            card.strength = this.strength;
        }
        return card;
    }
    ;
}
exports.WeaponCard = WeaponCard;
//# sourceMappingURL=card.js.map