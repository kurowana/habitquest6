<template>
  <div class="command-button" @click.stop="doClickEvent">{{commandText}}</div>
</template>

<script>
export default {
  props: {
    commandText: {
      type: String,
      required: true
    }
  },
  methods: {
    doClickEvent: function() {
      this.$emit("click-event");
    }
  }
};
</script>

<style scoped>
.command-button {
  width: 100px;
  height: 50px;
  background: black;
  color: white;
}
</style>