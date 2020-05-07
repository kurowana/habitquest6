<template>
  <div>
    <p class="value-text">{{currentValue}}/{{maxValue}}</p>
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
          return "linear-gradient(90deg,#dc143c,#ffff00 10%,#7fffd4 40%,#ee82ee)";
        case 3:
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
  height: 10px;
  border: 1px solid gold;
}
.bar-inner {
  position: absolute;
  top: 0;
  right: 0;
  height: 10px;
  background: black;
}
.value-text {
  margin: 0;
  padding: 0 10px 0 10px;
  color: white;
  text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, -1px 1px 0 #000,
    1px -1px 0 #000, 0px 1px 0 #000, 0-1px 0 #000, -1px 0 0 #000, 1px 0 0 #000;
  text-align: right;
}
</style>