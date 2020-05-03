<template>
  <div :style="{ opacity: imgOpacity, zIndex: imgZIndex }">
    <transition name="fade">
      <img
        v-if="this.targetNpc.name"
        :src="this.imgSrc"
        class="npc-img img-size"
        :class="motionClass"
      />
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    targetMonster: {
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
    ...mapGetters({
      windowWidth: "getWindowWidth",
      windowHeight: "getWindowHeight"
    }),
    // 指定されたNPC名を元に画像パスを返す
    imgSrc: function() {
      let imgPath = "";
      if (!this.npcList[this.targetNpc.name]) {
        return "images/clear.png";
      }
      return "images/npc/" + this.imgPath;
    },
    //画像の透過率、重なり順を返す
    imgOpacity: function() {
      return this.targetNpc.opacity;
    },
    imgZIndex: function() {
      return this.targetNpc.zIndex;
    },
    motionClass: function() {
      return this.targetNpc.motion;
    }
  }
};
</script>

<style scoped>
.npc-img {
  position: relative;
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

.tremble {
  animation: tremble 0.2s linear 0s infinite;
}

.jumpRepeat {
  animation: jump 0.5s ease-in-out 0s infinite;
}

.jump {
  animation: jump 0.4s ease-in-out 0s 2;
}

.close {
  transform: scale(1.2);
  opacity: 1;
}

.sit {
  transform: translateY(50px);
  opacity: 1;
}

.leave {
  transform: scale(0.8);
  opacity: 1;
}

.attack {
  animation: attack 1s ease-in-out 0s 1;
}

.left-attack {
  animation: left-attack 1s ease-in-out 0.5s 1;
}

.right-attack {
  animation: right-attack 1s ease-in-out 0s 1;
}

.left-attack-loop {
  animation: left-attack 1s ease-in-out 0.5s infinite;
}

.right-attack-loop {
  animation: right-attack 1s ease-in-out 0s infinite;
}

.left-slide {
  animation: left-slide 1.5s ease-in-out 0s;
}
.right-slide {
  animation: right-slide 1.5s ease-in-out 0s;
}
.left-slide-loop {
  animation: left-slide 1.5s ease-in-out 0s infinite alternate;
}
.right-slide-loop {
  animation: right-slide 1.5s ease-in-out 0s infinite alternate;
}

@keyframes tremble {
  0% {
    left: 0;
  }
  25% {
    left: 5px;
  }
  75% {
    left: -5px;
  }
  100% {
    left: 0;
  }
}

@keyframes jump {
  0% {
    bottom: 0;
  }
  50% {
    bottom: 50px;
  }
  100% {
    bottom: 0px;
  }
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

@keyframes left-attack {
  30% {
    transform: translateX(50px) rotate(5deg);
  }
  50% {
    transform: translateX(-150px) rotate(-5deg);
  }
  100% {
  }
}

@keyframes right-attack {
  30% {
    transform: translateX(-50px) rotate(-5deg);
  }
  50% {
    transform: translateX(150px) rotate(5deg);
  }
  100% {
  }
}

@keyframes right-slide {
  0% {
    left: 0px;
    top: 0px;
  }
  10% {
    left: 30px;
    top: -10px;
  }
  15% {
    left: 60px;
    top: 0px;
  }
  20% {
    left: 90px;
    top: -10px;
  }
  30% {
    left: 120px;
    top: 0px;
  }
  70% {
    left: 120px;
    top: 0px;
  }
  80% {
    left: 90px;
    top: -10px;
  }
  85% {
    left: 60px;
    top: 0px;
  }
  90% {
    left: 30px;
    top: -10px;
  }
  100% {
    left: 0px;
    top: 0px;
  }
}

@keyframes left-slide {
  0% {
    left: 0px;
    top: 0px;
  }
  10% {
    left: -30px;
    top: -10px;
  }
  15% {
    left: -60px;
    top: 0px;
  }
  20% {
    left: -90px;
    top: -10px;
  }
  30% {
    left: -120px;
    top: 0px;
  }
  70% {
    left: -120px;
    top: 0px;
  }
  80% {
    left: -90px;
    top: -10px;
  }
  85% {
    left: -60px;
    top: 0px;
  }
  90% {
    left: -30px;
    top: -10px;
  }
  100% {
    left: 0px;
    top: 0px;
  }
}

/* スマホ画面用 */
@media screen and (max-width: 480px) {
  .img-size {
    width: 150px;
    height: 200px;
  }
}
/* レティナスマホ用 */
@media screen and (min-width: 480px) and (max-width: 768px) {
  .img-size {
    width: 150px;
    height: 200px;
  }
}
/* タブレット用 */
@media screen and (min-width: 768px) and (max-width: 1280px) {
  .img-size {
    width: 300px;
    height: 400px;
  }
}
/* PC画面用 */
@media screen and (min-width: 1280px) {
  .img-size {
    width: 300px;
    height: 400px;
  }
}
</style>
