<template>
  <div class="life-window">
    <status-bar :max-value="maxHp" :current-value="currentHp" :color-type="1"></status-bar>
    <status-bar :max-value="maxMp" :current-value="currentMp" :color-type="2"></status-bar>
  </div>
</template>

<script>
import StatusBar from "../atoms/StatusBar";

export default {
  components: {
    "status-bar": StatusBar
  },
  props: {
    currentHp: {
      type: Number,
      required: true
    },
    maxHp: {
      type: Number,
      required: true
    },
    currentMp: {
      type: Number,
      required: true
    },
    maxMp: {
      type: Number,
      required: true
    }
  }
};
</script>

<style scoped>
.window-container {
  background: black;
  border: 1px solid gold;
  border-radius: 10px;
}
</style>