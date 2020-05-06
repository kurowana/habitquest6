<template>
  <div>
    <div class="bar-outer" :style="{background:barColor}">
      <div class="bar-inner" :style="{width:decreasedRate}"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    maxValue: {
      type: Number,
      required: true
    },
    currentValue: {
      type: Number,
      required: true
    },
    colorType: {
      type: Number,
      required: true
    }
  },
  computed: {
    barColor: function() {
      switch (this.colorType) {
        case 1:
          return "linear-gradient(90deg,#dc143c,#ffff00 10%,#98fb98 40%, #00bfff)";
        case 2:
          return "linear-gradient(135deg,#b0e0e6,#00ffff)";
      }
    },
    decreasedRate: function() {
      const decreasedValue = this.maxValue - this.currentValue;
      const rate = Math.round((decreasedValue / this.maxValue) * 100);
      return rate + "%";
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
  top: 0;
  right: 0;
  height: 20px;
  background: black;
}
</style>