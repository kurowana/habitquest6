<template>
  <div>
    <img :src="bgImgPath" class="bgImg" />
  </div>
</template>

<script>
export default {
  props: {
    bgImgPath: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.bgImg {
  width: 800px;
  height: 600px;
}
</style>