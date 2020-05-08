<template>
  <div v-if="visible" class="backdrop">
    <div class="modal">
      <div class="modal-title">
        <span class="close-button" @click="onClose">&times;</span>
        <h1>{{ title }}</h1>
      </div>
      <div class="modal-body">
        <slot />
      </div>
      <div class="modal-footer">
        <slot name="footer" :pepe="5" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  components: {},
  props: {
    title: {
      type: String,
      required: true
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    onClose() {
      this.$emit("update:visible", false);
    }
  }
};
</script>

<style scoped lang="scss">
.backdrop {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}

.modal {
  min-width: 500px;
  width: 50%;
  border: 1px solid black;
  border-radius: 4px;
  position: absolute;
  top: 10vh;
  right: 0;
  left: 0;
  margin: 0 auto;
  background-color: white;
}

.modal-title {
  height: 50px;
  border-bottom: 1px solid black;
}

.modal-body {
  min-height: 200px;
}

.modal-footer {
  height: 50px;
  border-top: 1px solid black;
}

.close-button {
  float: right;
  width: 50px;
  height: 50px;
  user-select: none;
  cursor: pointer;
  font-size: 2em;
  color: darkgreen;
  margin-right: 10px;
}
</style>
