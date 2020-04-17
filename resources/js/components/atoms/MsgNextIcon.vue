<template>
  <div>
    <span v-if="isTextEnd">＞＞</span>
  </div>
</template>

<script>
export default {
  props: {
    isTextEnd: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style scoped>
</style>