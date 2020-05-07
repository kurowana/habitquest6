<template>
  <div class="window-container">
    <window-base>aaa</window-base>
    <window-base>bbb</window-base>
    <window-base>ccc</window-base>
    <status-bar :maxValue="12560" :current-value="7987" :color-type="1"></status-bar>
    <status-bar :maxValue="4355" :current-value="1222" :color-type="2"></status-bar>
  </div>
</template>

<script>
import WindowBase from "../atoms/WindowBase";
import StatusBar from "../atoms/StatusBar";

export default {
  components: {
    "window-base": WindowBase,
    "status-bar": StatusBar
  }
};
</script>

<style scoped>
.window-container {
  position: relative;
  z-index: 100;
}
</style>