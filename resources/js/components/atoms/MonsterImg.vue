<template>
  <div class="monster-img">
    <img :src="monster.imgPath" class="monster-img img-size" :class="motionClass" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    monster: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {
      // モンスターリスト
      monsterList: {}
    };
  },
  computed: {
    motionClass: function() {
      console.log(this.monster.motion);
      return this.monster.motion;
    }
  },
  mounted: function() {
    const img = document.querySelector(".monster-img");
    img.addEventListener("animationend", () => {
      this.$emit("animation-end");
    });
  },
  methods: {
    watchImgAnimation: function() {}
  }
};
</script>

<style scoped>
.monster-img {
  position: relative;
  z-index: 10;
  text-align: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* 立ち絵モーション系 */
.motionBase {
  transition: all 0.5s 0s ease;
}

.attack {
  animation: attack 0.5s ease-in-out 0s 1;
}

@keyframes attack {
  30% {
    transform: scale(0.8) rotate(-5deg);
  }
  50% {
    transform: scale(1.2) rotate(5deg);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
