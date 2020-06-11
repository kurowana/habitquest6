<template>
  <div>
    <div v-for="(option, index) in selection" :key="index">
      <select-window :selection-text="option.text" @click-event="selected(option.event)"></select-window>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import SelectWindow from "../atoms/SelectWindow";

export default {
  components: {
    "select-window": SelectWindow
  },
  computed: {
    selection: getSelection
  },
  methods: {
    selected: function(event) {
      this.$store.dispatch("updateSelectionFlag", false);
    }
  }
};
</script>

<style scoped></style>
