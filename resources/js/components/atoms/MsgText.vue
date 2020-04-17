<template>
  <div class="textContent">
    {{text}}
    aaa
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.textContent {
  color: white;
}
</style>