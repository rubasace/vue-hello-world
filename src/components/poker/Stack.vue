<template>
  <div class="stack">
    <div class="bank-value">{{ stack }}</div>
    <div class="chips v-10" v-if="tens >= 1"></div>
    <div class="chips v-5" v-if="fives >= 1"></div>
    <div class="chips v-1" v-if="ones >= 1"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Stack extends Vue {
  @Prop({ type: String, required: true })
  private readonly stack!: number;

  private get tens() {
    return this.stack / 10;
  }
  private get fives() {
    return this.stack / 5;
  }
  private get ones() {
    return this.stack;
  }
}
</script>

<style scoped lang="scss">
.stack {
  position: absolute;
  width: 30px;
  height: 30px;
  top: 100px;
  right: 0;
  z-index: 10;
}

.stack .bank-value {
  position: absolute;
  font-family: "Houschka Rounded";
  right: -30px;
  font-weight: bold;
  font-size: 12px;
  color: #96e296;
}
.stack .bank-value:after {
  content: "$";
}
.stack .v-10 {
  top: -2px;
  right: -2px;
  background-color: crimson;
}
.stack .v-5 {
  top: 15px;
  right: 5px;
  background-color: goldenrod;
}
.stack .v-1 {
  top: 22px;
  left: -10px;
  background-color: #444;
}
.chips {
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 100%;
  border: 2px white dotted;
  box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
}
.chips.v-10 {
  background-color: crimson;
}
.chips.v-5 {
  background-color: goldenrod;
}
.chips.v-1 {
  background-color: #444;
}
</style>
