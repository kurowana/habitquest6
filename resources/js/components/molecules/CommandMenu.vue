<template>
  <div>
    <command-button :command-text="'攻撃'" @click-event="setCommand('attack')"></command-button>
    <command-button :command-text="'魔法'" @click-event="setCommand('magic')"></command-button>
    <command-button :command-text="'回復'" @click-event="setCommand('recover')"></command-button>
  </div>
</template>

<script>
import CommandButton from "../atoms/CommandButton";

export default {
  components: {
    "command-button": CommandButton
  },
  methods: {
    setCommand: function(command) {
      this.$emit("recive-command", command);
    }
  }
};
</script>