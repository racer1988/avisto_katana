<template>
  <div class="d-flex d-flex-direction-col mr-100">
    <div class="card-holder normal">
      <v-img v-if="game.gameDeck.cards.length>0" class="fullwidth" :src="require(`../assets/game/game_back.png`)" @click="drawGameCard" />
    </div>
    <div v-if="lastDiscardedCard" class="card-holder normal">
      <v-img class="fullwidth" :src="lastDiscardedCardImage" @click="drawDiscarded" />
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import Vue from "vue";
import { Game } from "@/../../shared/entities/game";

export default Vue.extend({
  props: {
    game: { type: Game, required: true }
  },
  computed: {
    lastDiscardedCard() {
      if (this.game.discardedGameDeck.cards.length == 0) {
        return null;
      }
      return this.game.discardedGameDeck.cards[
        this.game.discardedGameDeck.cards.length - 1
      ];
    },
    lastDiscardedCardImage() {
      if (!this.lastDiscardedCard) {
        return "";
      }
      return require(`../assets/game/${this.lastDiscardedCard.cardType}/${this.lastDiscardedCard.cardName}.png`);
    }
  },
  methods: {
    drawDiscarded() {
      axios.put(`api/players/${this.$store.getters.username}/drawDiscarded`);
    },
    drawGameCard() {
      axios.put(`api/players/${this.$store.getters.username}/draw`);
    }
  }
});
</script>

<style>
.mr-100 {
  margin-right: 100px;
}
</style>