<template>
  <div>
    <transition name="fade">
      <img v-if="place.isDisplay" :src="currentBgImg" class="bgImg currentBg" />
    </transition>
    <transition name="fade">
      <img v-if="!place.isDisplay" :src="nextBgImg" class="bgImg nextBg" />
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  components: {
    "bg-img": BgImg
  },
  props: {
    bgImgObj: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {
      bgImgList: {
        酒場: "bar.jpg",
        武器屋: "bukiya.jpg",
        小道: "komichi.jpg",
        エントランス: "entrance.jpg",
        街: "town.jpg",
        豪邸の部屋: "room_goutei.jpg",
        アイテム屋: "item_shop.jpg",
        豪邸のエントランス: "entrance_goutei.jpg",
        闘技場: "tougijou.jpg",
        渓流: "keiryuu.jpg",
        研究所: "kenkyuujo.jpg",
        小屋: "koya.jpg",
        森山: "moriyama.jpg",
        木: "tree.jpg",
        神殿: "shinden.jpg",
        地底湖: "titeiko.jpg",
        詰所: "tumesyo.jpg",
        厨房: "tyuubou.jpg",
        占い館: "uranai.jpg",
        宿屋: "yadoya_room.jpg",
        ウッドハウス: "woodhouse.jpg"
      }
    };
  },
  computed: {
    ...mapGetters({
      place: getPlace
    }),
    currentBgImg: function() {
      return "images/bg/" + this.bgImgList[this.place.current];
    },
    nextBgImg: function() {
      return "images/bg/" + this.bgImgList[this.place.next];
    }
  }
};
</script>

<style scoped>
.bgImg {
  width: 800px;
  height: 600px;
}

.currentBg {
  z-index: 2;
}
.nextBg {
  z-index: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>