<template>
  <div class="window-container">
    <window-base>aaa</window-base>
    <window-base>bbb</window-base>
    <window-base>ccc</window-base>
  </div>
</template>

<script>
import WindowBase from "../atoms/WindowBase";

export default {
  components: {
    "window-base": WindowBase
  }
};
</script>

<style scoped>
.window-container {
  position: relative;
  z-index: 100;
}
</style>