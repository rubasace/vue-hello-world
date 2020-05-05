<template>
  <div class="about">
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