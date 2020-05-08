<template>
  <li>
    <span class="close-button" @click="remove">&times;</span>
    <input type="checkbox" v-model="done" />
    {{ item }}
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component({})
export default class TodoItem extends Vue {
  @Prop({ type: String, required: true })
  private readonly item!: string;

  private done = false;

  private remove() {
    this.$emit("remove");
  }

  @Watch("done")
  private watchDone(value: boolean) {
    console.log(`done is ${this.done}`);
  }
}
</script>

<style scoped lang="scss">
$color: #f0f7fb;

li {
  list-style-type: none;
  text-align: left;
  border-bottom: 1px solid darken($color, 20%);
  padding: 10px 0px;
}

.close-button {
  float: right;
  user-select: none;
  cursor: pointer;
  font-size: 2em;
  color: #ccc;
  margin-right: 10px;
}
</style>
