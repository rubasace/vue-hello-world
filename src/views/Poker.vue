<template>
  <div class="about">
    <PokerTable />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PokerTable from "@/components/poker/PokerTable.vue";

@Component({
  components: {
    PokerTable
  }
})
export default class Hello extends Vue {
  // private visible = true;
}
</script>
