<template>
  <div class="monster-img">
    <img :src="monster.imgPath" class="monster-img img-size" :class="motionClass" />
    <div v-if="isShowEffect" class="effect-anime" :style="effectStyle">aaaa</div>
    <!-- <img :src="effectSrc" /> -->
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
      monsterList: {},
      isShowEffect: false
    };
  },
  computed: {
    motionClass: function() {
      return this.monster.motion;
    },
    effectStyle: function() {
      this.effectTop = Math.floor(Math.random() * 100);
      this.effectLeft = 250 + Math.floor(Math.random() * 100);
      return {
        background: 'url("/images/effect/' + this.monster.effect + '.png")',
        left: this.effectLeft + "px",
        top: this.effectTop + "px"
      };
    }
  },
  watch: {
    "monster.effect": function() {
      if (this.monster.effect === "none") {
        this.isShowEffect = false;
      } else {
        this.isShowEffect = true;
      }
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

/* 戦闘エフェクト */
.effect-anime {
  position: absolute;
  display: block;
  width: 192px;
  height: 192px;

  z-index: 100;
  animation: sprite54 0.3s step-end 0s 1;
}

@keyframes sprite54 {
  1% {
    background-position: 0 0;
  }
  5% {
    background-position: -192px 0;
  }
  10% {
    background-position: -384px 0;
  }
  15% {
    background-position: -576px 0;
  }
  20% {
    background-position: -768px 0;
  }
  25% {
    background-position: 0 -192px;
  }
  30% {
    background-position: -192px -192px;
  }
  35% {
    background-position: -384px -192px;
  }
  40% {
    background-position: -576px -192px;
  }
  45% {
    background-position: -768px -192px;
  }
  50% {
    background-position: 0 -384px;
  }
  55% {
    background-position: -192px -384px;
  }
  60% {
    background-position: -384px -384px;
  }
  65% {
    background-position: -576px -384px;
  }
  70% {
    background-position: -768px -384px;
  }
  75% {
    background-position: 0 -576px;
  }
  80% {
    background-position: -192px -576px;
  }
  85% {
    background-position: -384px -576px;
  }
  90% {
    background-position: -576px -576px;
  }
  95% {
    background-position: -768px -576px;
  }
}
</style>
