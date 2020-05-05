<template>
  <div>
    <div class="bar-outer" style="background:linear-gradient(90deg,red,yellow,cyan, blue)">
      <div
        class="bar-inner"
        style="width:20%; background:black; position:absolute; top:0; right:0 z-index:500"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    max: {
      type: Number,
      required: true
    },
    current: {
      type: Number,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.bar-outer {
  position: relative;
  width: 100%;
  height: 20px;
}
.bar-inner {
  position: absolute;
  height: 20px;
}
</style>