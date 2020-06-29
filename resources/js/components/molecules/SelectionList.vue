<template>
  <div>
    <!-- <div v-for="(option, index) in selection" :key="index">
      <select-button :selection-text="option.text" @click-event="selected"></select-button>
    </div>-->
    <select-button :selection-text="selection[0].text" @click-event="selected"></select-button>
    <select-button :selection-text="selection[1].text" @click-event="selected"></select-button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import SelectButton from "../atoms/SelectButton";

export default {
  components: {
    "select-button": SelectButton
  },
  props: {
    // selection: {
    //   type: Object,
    //   required: false
    // }
  },
  computed: {
    ...mapGetters({
      selection: "getSelection"
    })
  },
  methods: {
    selected: function() {
      this.$emit("selected", selectEvent);
    }
  }
};
</script>

<style scoped></style>
