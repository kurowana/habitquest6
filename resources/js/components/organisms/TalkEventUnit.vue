<template>
  <div>
    <div class="event-container" :style="{ background: backgroundImg }">
      <div class="char-img-container">
        <npc-viewer :displaying-npc="eventState.npc"></npc-viewer>
      </div>
      <div class="msg-window-container">
        <msg-window :displaying-message="eventState.message" @msg-completed="transferMsgEnd"></msg-window>
      </div>
    </div>
  </div>
</template>

<script>
import NpcViewer from "../molecules/NpcViewer";
import MsgWindow from "../molecules/MsgWindow";

export default {
  components: {
    "npc-viewer": NpcViewer,
    "msg-window": MsgWindow
  },
  props: {
    eventState: {
      type: Object,
      required: true
    },
    eventPlace: {
      type: String,
      required: true
    },
    isSceneEnd: {
      type: Boolean,
      required: true
    }
  },
  data: function() {
    return {};
  },
  computed: {
    backgroundImg: function() {
      const basePath = "images/bg/";
      let imgPath = "";
      switch (this.eventPlace) {
        case "酒場":
          imgPath = "bar.jpg";
          break;
        case "武器屋":
          imgPath = "bukiya.jpg";
          break;
        case "小道":
          imgPath = "komichi.jpg";
          break;
        case "エントランス":
          imgPath = "entrance.jpg";
          break;
        case "街":
          imgPath = "town.jpg";
          break;
        case "豪邸の部屋":
          imgPath = "room_goutei.jpg";
          break;
        case "アイテム屋":
          imgPath = "item_shop.jpg";
          break;
        case "豪邸のエントランス":
          imgPath = "entrance_goutei.jpg";
          break;
        case "闘技場":
          imgPath = "tougijou.jpg";
          break;
        case "渓流":
          imgPath = "keiryuu.jpg";
          break;
        case "研究所":
          imgPath = "kenkyuujo.jpg";
          break;
        case "小屋":
          imgPath = "koya.jpg";
          break;
        case "森山":
          imgPath = "moriyama.jpg";
          break;
        case "木":
          imgPath = "tree.jpg";
          break;
        case "神殿":
          imgPath = "shinden.jpg";
          break;
        case "地底湖":
          imgPath = "titeiko.jpg";
          break;
        case "詰所":
          imgPath = "tumesyo.jpg";
          break;
        case "厨房":
          imgPath = "tyuubou.jpg";
          break;
        case "占い館":
          imgPath = "uranai.jpg";
          break;
        case "宿屋":
          imgPath = "yadoya_room.jpg";
          break;
        case "ウッドハウス":
          imgPath = "woodhouse.jpg";
          break;
      }
      return "url(" + basePath + imgPath + ")";
    }
  },
  methods: {
    transferMsgEnd: function() {
      this.$emit("msg-completed");
    }
  }
};
</script>

<style scoped>
.event-container {
  position: relative;
  width: 800px;
  height: 600px;
  /* background: url(../../../../public/images/bg/shinden.jpg); */
  overflow: hidden;
}

/* スマホ画面用 */
@media screen and (max-width: 480px) {
  .char-img-container {
    position: absolute;
    top: 0;
  }
  .msg-window-container {
    position: absolute;
    top: 200px;
  }
}
/* レティナスマホ用 */
@media screen and (min-width: 480px) and (max-width: 768px) {
  .char-img-container {
    position: absolute;
    top: 0;
  }
  .msg-window-container {
    position: absolute;
    top: 200px;
  }
}
/* タブレット用 */
@media screen and (min-width: 768px) and (max-width: 1280px) {
  .char-img-container {
    position: absolute;
    top: 0;
  }
  .msg-window-container {
    position: absolute;
    top: 400px;
  }
}
/* PC画面用 */
@media screen and (min-width: 1280px) {
  .char-img-container {
    position: absolute;
    top: 0;
  }
  .msg-window-container {
    position: absolute;
    top: 420px;
  }
}
</style>
