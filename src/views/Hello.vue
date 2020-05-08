<template>
  <div class="about">
    <!--        <Modal title="Modal Reshulon" :visible.sync="visible">-->
    <!--            <p>Blablabla</p>-->
    <!--            <template v-slot:footer="{pepe}">-->
    <!--                <p>JOIafjaklsfalkfjajgpsjbp afj {{pepe}} </p>-->
    <!--            </template>-->
    <!--            <p>Blebele</p>-->
    <!--        </Modal>-->
    <!--        <NiceButton @click="visible=true">Show Modal</NiceButton>-->
    <TodoList />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import TodoList from "@/components/TodoList.vue";
import Modal from "@/components/Modal.vue";
import NiceButton from "@/components/NiceButton.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    NiceButton,
    Modal,
    TodoList
  }
})
export default class Hello extends Vue {
  // private visible = true;
}
</script>
