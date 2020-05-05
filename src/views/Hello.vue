<template>
  <div class="about">
    <p>Hello Hello Hello</p>
    <TodoList/>
  </div>
</template>

<script lang="ts">
  // @ is an alias to /src
  import TodoList from "@/components/TodoList.vue";

  export default {
    name: "Hello",
    components: {
      TodoList
    },
    methods: {}
  };
</script>