<template>
  <div class="card" :class="[suit, value]">
    <h1>{{ value }}</h1>
    <div class="suit" :class="suit"></div>
    <h1>{{ value }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Card extends Vue {
  @Prop({ type: String, required: true })
  private readonly suit!: string;

  @Prop({ type: String, required: true })
  private readonly value!: string;
}
</script>

<style scoped lang="scss">
.card {
  height: 70px;
  width: 50px;
  border-radius: 5px;
  border: black;
  display: inline-block;
  position: relative;
  background-color: white;
  font-family: "Houschka Rounded";
  &.suit-P,
  &.suit-C {
    color: #515260;
  }
  &.suit-H,
  &.suit-D {
    color: #ec6e69;
  }
  h1 {
    font-size: 10px;
    text-align: center;
    position: absolute;
    margin: 0;
    &:first-child {
      top: 5px;
      left: 5px;
    }
    &:last-child {
      bottom: 5px;
      right: 5px;
      transform: rotatez(180deg);
    }
  }
  .suit {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
}

.suit {
  width: 20px;
  height: 20px;
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/441095/clovers.svg");
  background-size: 40px;
  &.P {
    background-position: 0 0;
  }
  &.D {
    background-position: 20px 0;
  }
  &.C {
    background-position: 20px 20px;
  }
  &.H {
    background-position: 0 20px;
  }
}
</style>
