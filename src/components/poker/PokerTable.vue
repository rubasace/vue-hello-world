<template>
  <div class="vue-container">
    <div class="table">
      <div class="card-place">
        <Card v-for="(card, index) in fiveCards" :key="index" v-bind="card" />
      </div>
      <div class="players">
        <Player
          v-for="(player, index) in players"
          :key="index"
          :index="index"
          v-bind="player"
          :playing="player_playing === index"
        />
      </div>
    </div>
    <!--        <button class="bouton" @click="">Refresh</button>-->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Card from "@/components/poker/Card.vue";
import Stack from "@/components/poker/Stack.vue";
import Player from "@/components/poker/Player.vue";

@Component({
  components: { Player, Stack, Card }
})
export default class PokerTable extends Vue {
  private suits = ["S", "H", "C", "D"];
  private values = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  private players = [
    { name: "rivy33", stack: 100, onTable: 77, hasCards: false },
    { name: "kattar", color: "cyan", stack: 100, onTable: 20, hasCards: false },
    {
      name: "mikelaire",
      color: "lightcoral",
      stack: 100,
      onTable: 20,
      hasCards: false
    },
    {
      name: "tomtom",
      color: "crimson",
      stack: 100,
      onTable: 20,
      hasCards: false
    },
    { name: "nana", color: "#444", stack: 100, onTable: 20, hasCards: false },
    {
      name: "ionion",
      color: "forestgreen",
      stack: 100,
      onTable: 20,
      hasCards: false
    },
    {
      name: "link6996",
      color: "goldenrod",
      stack: 100,
      onTable: 20,
      hasCards: false
    },
    {
      name: "gossboganon",
      color: "gold",
      stack: 100,
      onTable: 20,
      hasCards: false
    }
  ];
  private player_playing = 0;

  private get cards() {
    const all = [];
    for (const suit of this.suits) {
      for (const value of this.values) {
        all.push({
          suit,
          value
        });
      }
    }
    return all;
  }

  private get fiveCards() {
    const fives = [];
    for (let i = 0; i < 5; i++) {
      const randomCard = Math.floor(Math.random() * this.cards.length);
      fives.push(this.cards[randomCard]);
    }
    return fives;
  }
}
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}

.vue-container {
  width: 100vw;
  height: 100vh;
}

.table {
  width: 1000px;
  height: 400px;
  background-color: #4aad4a;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  border-radius: 150px;
  position: relative;
  border: 15px solid #a95555;
}

.table:before {
  content: "";
  border: 7px solid rgba(0, 0, 0, 0.1);
  display: block;
  width: 1015px;
  height: 415px;
  border-radius: 150px;
  position: absolute;
  top: -15px;
  left: -15px;
}

.table:after {
  content: "";
  border: 7px solid rgba(0, 0, 0, 0.1);
  display: block;
  width: 985px;
  height: 385px;
  border-radius: 130px;
  position: absolute;
  top: 0;
  left: 0;
}

.table .card-place {
  border: 5px solid #63c763;
  height: 100px;
  width: 340px;
  position: absolute;
  border-radius: 10px;
  padding: 10px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  box-sizing: border-box;
}

.table .card-place .card:not(:last-child) {
  margin-right: 15px;
}

.players {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 100;
}

.players .player {
  position: absolute;
}

.players .player .avatar {
  width: 120px;
  height: 120px;
  background-color: lightcoral;
  border-radius: 100%;
  position: relative;
  box-shadow: 2px 10px 0px rgba(0, 0, 0, 0.4);
  z-index: 20;
}

.players .player .avatar:after {
  content: "";
  width: 70px;
  height: 70px;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.1);
  top: 50%;
  left: 50%;
  -webkit-transform: translatex(-50%) translatey(-50%);
  transform: translatex(-50%) translatey(-50%);
  border-radius: 100%;
  box-shadow: 0px 5px 0px rgba(0, 0, 0, 0.2);
}

.players .player .name {
  font-family: "Houschka Rounded";
  text-align: center;
  width: 100px;
  color: #96e296;
  padding: 5px 0;
  margin-left: 10px;
  box-sizing: border-box;
  border: 2px solid #96e296;
  border-radius: 5px;
  margin-top: 15px;
  text-overflow: ellipsis;
  font-size: 11px;
  overflow: hidden;
  position: relative;
}

.players .player.playing:before {
  content: "...";
  color: white;
  font-size: 20px;
  position: absolute;
  background-color: #76daff;
  display: inline-block;
  line-height: 0px;
  height: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  z-index: 100;
}

.players .player.player-1 {
  top: 0px;
  left: 50%;
  -webkit-transform: translatex(-50%) translatey(-50%);
  transform: translatex(-50%) translatey(-50%);
}

.players .player.player-2 {
  bottom: 0px;
  left: 50%;
  -webkit-transform: translatex(-50%) translatey(50%) rotatez(180deg);
  transform: translatex(-50%) translatey(50%) rotatez(180deg);
}

.players .player.player-2 .name {
  -webkit-transform: rotatez(180deg);
  transform: rotatez(180deg);
}

.players .player.player-2 .bank-value {
  -webkit-transform: rotatez(180deg);
  transform: rotatez(180deg);
}

.players .player.player-2 .mise-value {
  -webkit-transform: rotatez(180deg);
  transform: rotatez(180deg);
}

.players .player.player-3 {
  top: 50%;
  left: 0px;
  -webkit-transform: translatex(-50%) translatey(-50%) rotatez(-90deg);
  transform: translatex(-50%) translatey(-50%) rotatez(-90deg);
}

.players .player.player-3 .name {
  -webkit-transform: rotatez(0deg);
  transform: rotatez(0deg);
}

.players .player.player-4 {
  top: 50%;
  right: 0px;
  -webkit-transform: translatex(50%) translatey(-50%) rotatez(90deg);
  transform: translatex(50%) translatey(-50%) rotatez(90deg);
}

.players .player.player-4 .name {
  -webkit-transform: rotatez(0deg);
  transform: rotatez(0deg);
}

.players .player.player-5 {
  top: 0px;
  left: 25%;
  -webkit-transform: translatex(-50%) translatey(-50%);
  transform: translatex(-50%) translatey(-50%);
}

.players .player.player-6 {
  bottom: 0px;
  left: 75%;
  -webkit-transform: translatex(-50%) translatey(50%) rotatez(180deg);
  transform: translatex(-50%) translatey(50%) rotatez(180deg);
}

.players .player.player-6 .name {
  -webkit-transform: rotatez(180deg);
  transform: rotatez(180deg);
}

.players .player.player-6 .bank-value {
  -webkit-transform: rotatez(180deg);
  transform: rotatez(180deg);
}

.players .player.player-6 .mise-value {
  -webkit-transform: rotatez(180deg);
  transform: rotatez(180deg);
}

.players .player.player-7 {
  top: 0px;
  left: 75%;
  -webkit-transform: translatex(-50%) translatey(-50%);
  transform: translatex(-50%) translatey(-50%);
}

.players .player.player-8 {
  bottom: 0px;
  left: 25%;
  -webkit-transform: translatex(-50%) translatey(50%) rotatez(180deg);
  transform: translatex(-50%) translatey(50%) rotatez(180deg);
}

.players .player.player-8 .name {
  -webkit-transform: rotatez(180deg);
  transform: rotatez(180deg);
}

.players .player.player-8 .bank-value {
  -webkit-transform: rotatez(180deg);
  transform: rotatez(180deg);
}

.players .player.player-8 .mise-value {
  -webkit-transform: rotatez(180deg);
  transform: rotatez(180deg);
}
</style>
