<template>
  <div class="bg">
    <p class="view">game</p>
    {{ this.width }}
    <div v-if="testShow">test</div>
  </div>
</template>


<script>
export default {
  data: function() {
    return {
      test: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  computed: {
    testShow: function() {
      if (this.width > 1000) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    handleResize: function() {
      // resizeのたびにこいつが発火するので、ここでやりたいことをやる
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    }
  },
  mounted: function() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy: function() {
    window.removeEventListener("resize", this.handleResize);
  }
};
</script>

<style scoped>
.bg {
  width: 100%;
  height: 100%;
  background: url("../../../../storage/app/public/bg_img/tree.jpg") center
    center no-repeat;
  background-size: cover;
}
.view {
  font-size: 1vw;
}
</style>
