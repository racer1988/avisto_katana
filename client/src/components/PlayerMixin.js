"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const vue_1 = tslib_1.__importDefault(require("vue"));
const axios_1 = tslib_1.__importDefault(require("axios"));
exports.default = vue_1.default.extend({
    props: {
        player: {
            type: Object
        }
    },
    computed: {
        roleImgUrl() {
            return require(`../assets/roles/${this.player.role.cardName}.png`);
        },
        lifePoints() {
            if (!this.player.lifePoints) {
                return [];
            }
            return Array.from(Array(this.player.lifePoints));
        },
        honorPoints() {
            if (!this.player.honorPoints) {
                return [];
            }
            return Array.from(Array(this.player.honorPoints));
        },
        characterImgUrl() {
            return require(`../assets/characters/${this.player._character.cardName}.png`);
        },
        isCurrentPlayer() {
            return this.player.isCurrentPlayer;
        },
        isShogun() {
            return this.player.role.cardName.toLowerCase() == "shogun";
        },
        isOwnerPlayer() {
            return this.player.isOwnerPlayer;
        }
    },
    methods: {
        getCardUrl(card) {
            return require(`../assets/game/${card.cardType}/${card.cardName}.png`);
        },
        playCard(index) {
            if (this.isCurrentPlayer) {
                axios_1.default.put(`api/players/${this.player.id}/hand/${index}/play`);
            }
        },
        discardCardFromGame(index) {
            axios_1.default.put(`api/players/${this.player.id}/game/${index}/discard`);
        },
        endTurn() {
            //if (this.isCurrentPlayer) { TODO uncomment
            axios_1.default.post("/api/game/endTurn");
            //}
        }
    }
});
//# sourceMappingURL=PlayerMixin.js.map