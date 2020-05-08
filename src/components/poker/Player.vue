<template>
  <div class="player" :class="['player-' + (index + 1), playing && 'playing']">
    <Stack :stack="stack - onTable" />
    <div
      class="avatar"
      :style="{ backgroundColor: color || 'dodgerblue' }"
    ></div>
    <div class="name">{{ name }}</div>
    <div class="mise">
      <Stack :stack="onTable" class="mise" />
    </div>
    <!--        <div class="mise">-->
    <!--            <div class="mise-value">-->
    <!--                {{ onTable }}-->
    <!--            </div>-->
    <!--            <div class="jeton-10" v-if="onTable / 10 >= 1">-->
    <!--                <div class="jetons v-10" v-for="(n, i) in ((onTable - (onTable % 10)) / 10)" :style="{top: (-2 + (i * 5)) + 'px'}"-->
    <!--                     :key="i"></div>-->
    <!--            </div>-->
    <!--            <div class="jeton-5" v-if="onTable % 10 && onTable % 10 >= 2">-->
    <!--                <div class="jetons v-5" v-for="(n, i) in (((onTable % 10) - ((onTable % 10) % 2)) / 2)" :style="{top: (-2 + (i * 5)) + 'px'}"-->
    <!--                     :key="i"-->
    <!--                ></div>-->
    <!--            </div>-->
    <!--            <div class="jeton-1" v-if="onTable % 10 && onTable % 2">-->
    <!--                <div class="jetons v-1"></div>-->
    <!--            </div>-->
    <!--        </div>-->
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import Card from "@/components/poker/Card.vue";
import Stack from "@/components/poker/Stack.vue";

@Component({
  components: { Stack, Card }
})
export default class PokerTable extends Vue {
  @Prop({ type: String, required: true })
  private readonly name!: string;
  @Prop({ type: Number, required: true })
  private readonly stack!: number;
  @Prop({ type: Number, required: true })
  private readonly onTable!: number;
  @Prop({ type: Boolean, required: true })
  private readonly hasCards!: boolean;

  @Prop({ type: String, required: true })
  private readonly color!: string;
  @Prop({ type: Number, required: true })
  private readonly index!: number;
  @Prop({ type: Boolean, required: true })
  private readonly playing!: boolean;
}
</script>

<style>
.mise {
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translatex(-50%);
  height: 40px;
  width: 60px;
}

.player {
  position: absolute;
}

.player .avatar {
  width: 120px;
  height: 120px;
  background-color: lightcoral;
  border-radius: 100%;
  position: relative;
  box-shadow: 2px 10px 0px rgba(0, 0, 0, 0.4);
  z-index: 20;
}

.player .avatar:after {
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

.player .name {
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

.player.playing:before {
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

.player.player-1 {
  top: 0px;
  left: 50%;
  -webkit-transform: translatex(-50%) translatey(-50%);
  transform: translatex(-50%) translatey(-50%);
}

.player.player-2 {
  bottom: 0px;
  left: 50%;
  -webkit-transform: translatex(-50%) translatey(50%) rotatez(180deg);
  transform: translatex(-50%) translatey(50%) rotatez(180deg);
}

.player.player-2 .name {
  transform: rotatez(180deg);
}

.player.player-2 .bank-value {
  transform: rotatez(180deg);
}

.player.player-2 .mise-value {
  transform: rotatez(180deg);
}

.player.player-3 {
  top: 50%;
  left: 0px;
  transform: translatex(-50%) translatey(-50%) rotatez(-90deg);
}

.player.player-3 .name {
  transform: rotatez(0deg);
}

.player.player-4 {
  top: 50%;
  right: 0px;
  transform: translatex(50%) translatey(-50%) rotatez(90deg);
}

.player.player-4 .name {
  transform: rotatez(0deg);
}

.player.player-5 {
  top: 0px;
  left: 25%;
  transform: translatex(-50%) translatey(-50%);
}

.player.player-6 {
  bottom: 0px;
  left: 75%;
  transform: translatex(-50%) translatey(50%) rotatez(180deg);
}

.player.player-6 .name {
  transform: rotatez(180deg);
}

.player.player-6 .bank-value {
  transform: rotatez(180deg);
}

.player.player-6 .mise-value {
  transform: rotatez(180deg);
}

.player.player-7 {
  top: 0px;
  left: 75%;
  transform: translatex(-50%) translatey(-50%);
}

.player.player-8 {
  bottom: 0px;
  left: 25%;
  transform: translatex(-50%) translatey(50%) rotatez(180deg);
}

.player.player-8 .name {
  transform: rotatez(180deg);
}

.player.player-8 .bank-value {
  transform: rotatez(180deg);
}

.player.player-8 .mise-value {
  transform: rotatez(180deg);
}
</style>
