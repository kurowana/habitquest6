<template>
  <div>
    <div v-for="(option, index) in selection" :key="index">
      <select-button :selection-text="option.text" @click-event="selected()"></select-button>
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
    selected: function() {
      console.log(3);
      // this.$emit("selected", selectEvent);
    }
  }
};
</script>

<style scoped></style>
