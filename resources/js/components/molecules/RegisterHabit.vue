<template>
  <div>
    <label>習慣名</label>
    <text-input-field :input-text="habitName" @return-text="reciveName"></text-input-field>
    <func-button :button-text="'登録'" @click-event="registerHabit"></func-button>
  </div>
</template>

<script>
import axios from "axios";

import TextInputField from "../atoms/TextInputField";
import FuncButton from "../atoms/FuncButton";

export default {
  components: {
    "text-input-field": TextInputField,
    "func-button": FuncButton
  },
  data: function() {
    return {
      habitName: ""
    };
  },
  methods: {
    reciveName: function(text) {
      this.habitName = text;
    },
    registerHabit: function() {
      axios
        .post("./register_habit", {
          name: this.habitName
        })
        .then(res => {
          this.$emit("change-habit");
        });
    }
  }
};
</script>
