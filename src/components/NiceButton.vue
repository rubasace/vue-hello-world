<template>
  <button @click="onClick">
    <slot />
  </button>
</template>

<script>
export default {
  name: "NiceButton",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
</script>

<style scoped lang="scss">
$color: #42b983;
button {
  color: black;
  background-color: $color;
  border: 1px solid darken($color, 50%);
  border-radius: 4px;
  outline: none;

  &:hover {
    background-color: lighten($color, 20%);
  }
}
</style>
