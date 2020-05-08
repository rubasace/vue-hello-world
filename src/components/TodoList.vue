<template>
  <div class="todo-list">
    <h1>{{ title }}</h1>
    <p>
      <input type="text" class="input" v-model="filter" />
    </p>
    <ol v-show="filteredItems.length > 0">
      <TodoItem
        v-for="(item, index) in filteredItems"
        :key="index"
        :item="item"
        @remove="deleteElement(index)"
      />
    </ol>
    <p v-show="items.length === 0">No tasks yet :(</p>
    <p v-show="items.length > 0 && filteredItems.length === 0">
      No tasks meet your criteria
    </p>
    <p>
      <input
        type="text"
        class="input"
        @keypress.enter="addElement"
        v-model="newElement"
      />
    </p>
    <p>
      <NiceButton @click="clear">Clear {{ items.length }}</NiceButton>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import NiceButton from "@/components/NiceButton.vue";
import TodoItem from "@/components/TodoItem.vue";

@Component({
  components: { TodoItem, NiceButton }
})
export default class TodoList extends Vue {
  @Prop({ type: String, default: "TO-DO List" })
  private readonly title!: string;

  private items: string[] = [];
  private newElement = "";
  private filter = "";

  private get filteredItems() {
    return !this.filter
      ? this.items
      : this.items.filter(e => e.includes(this.filter));
  }

  private addElement() {
    this.items.push(this.newElement);
    this.newElement = "";
  }

  private clear() {
    this.items = [];
  }

  private deleteElement(index: number) {
    this.items.splice(index, 1);
  }

  @Watch("newElement")
  private watchNewElement(newValue: string, oldValue: string) {
    console.log(`new element changed from ${oldValue} to ${newValue}`);
  }
}
</script>

<style scoped lang="scss">
$color: #f0f7fb;
.todo-list {
  background-color: $color;
  /*background-image: url(../Images/icons/Pencil-48.png);*/
  background-position: 9px 0px;
  background-repeat: no-repeat;
  border: solid 1px darken($color, 20%);
  border-radius: 6px;
  line-height: 18px;
  overflow: hidden;
  padding: 10px 60px;
  max-width: 500px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 5px;
}
</style>
