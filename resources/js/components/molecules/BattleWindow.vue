<template>
  <div class="window-container">
    <window-base>aaa</window-base>
    <window-base>bbb</window-base>
    <window-base>ccc</window-base>
    <bar></bar>
  </div>
</template>

<script>
import WindowBase from "../atoms/WindowBase";
import Bar from "../atoms/StatusBar";

export default {
  components: {
    "window-base": WindowBase,
    bar: Bar
  }
};
</script>

<style scoped>
.window-container {
  position: relative;
  z-index: 100;
}
</style>