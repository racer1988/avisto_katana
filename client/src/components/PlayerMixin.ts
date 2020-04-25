import Vue from 'vue'
import axios from "axios";
import { GameCard } from '@/../../server/src/entities/card'

export default Vue.extend({
  props: {
    player: {
      type: Object
    }
  },
  computed: {
    roleImgUrl(): string {
      return require(`../assets/roles/${this.player.role.cardName}.png`);
    },
    lifePoints(): Array<number> {
      if (!this.player.lifePoints) {
        return [];
      }
      return Array.from(Array(this.player.lifePoints));
    },
    honorPoints(): Array<number> {
      if (!this.player.honorPoints) {
        return [];
      }
      return Array.from(Array(this.player.honorPoints));
    },
    characterImgUrl(): string {
      return require(`../assets/characters/${this.player._character.cardName}.png`);
    },
    isCurrentPlayer(): boolean {
      return this.player.isCurrentPlayer;
    },
    isShogun(): boolean {
      return this.player.role.cardName.toLowerCase() == "shogun"
    },
    isOwnerPlayer(): boolean {
      return this.player.isOwnerPlayer;
    }
  },
  methods: {
    getCardUrl(card: GameCard): void {
      return require(`../assets/game/${card.cardType}/${card.cardName}.png`);
    },
    playCard(index: number): void {
      if (this.isCurrentPlayer) {
        axios.put(`api/players/${this.player.id}/hand/${index}/play`);
      }
    },
    discardCardFromGame(index: number) {
      axios.put(`api/players/${this.player.id}/game/${index}/discard`);
    },

    endTurn() {
      //if (this.isCurrentPlayer) { TODO uncomment
      axios.post("/api/game/endTurn");
      //}
    }
  }
});