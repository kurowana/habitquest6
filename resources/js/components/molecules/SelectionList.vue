<template>
  <div>
    <div v-for="(option, index) in selection" :key="index">
      <select-button :selection-text="option.text" @click-event="selected(option.event)"></select-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import SelectButton from "../atoms/SelectButton";

export default {
  components: {
    "select-button": SelectButton
  },
  computed: {
    selection: getSelection
  },
  methods: {
    selected: function(event) {
      this.$emit("selected", event);
    }
  }
};
</script>F

<style scoped></style>
