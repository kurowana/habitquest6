<template>
  <div>
    <span v-if="isSceneEnd" class="next-icon">▼</span>
  </div>
</template>

<script>
export default {
  props: {
    isSceneEnd: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style scoped>
.next-icon {
  color: gold;
  font-size: 20px;
  font-weight: bold;
  animation: updown-icon 0.8s infinite;
}

/* アニメーション */
@keyframes updown-icon {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 5px);
    opacity: 0.5;
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
