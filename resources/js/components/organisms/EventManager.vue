<template>
  <div class="event-container" @click="clickEventViewer">
    <npc-viewer class="char-img-container"></npc-viewer>
    <msg-window class="msg-window-container"></msg-window>
    <selection-list class="selection-area" v-if="selection.isDisplay"></selection-list>
    <background-img class="bg-container"></background-img>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

import baseMixin from "../../mixins/baseMixin";

import NpcViewer from "../molecules/NpcViewer";
import MsgWindow from "../molecules/MsgWindow";
import SelectionList from "../molecules/SelectionList";
import BackgroundImg from "../atoms/BackgroundImg";
import ModalWindow from "../atoms/ModalWindow";

export default {
  mixins: [baseMixin],
  components: {
    "npc-viewer": NpcViewer,
    "msg-window": MsgWindow,
    "selection-list": SelectionList,
    "background-img": BackgroundImg,
    "modal-window": ModalWindow
  },
  props: {
    eventScripts: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {
      isDisplayModal: false
      // selection: null
    };
  },
  computed: {
    ...mapGetters({
      scene: "getScene",
      message: "getMessage",
      selection: "getSelection",
      npc: "getNpc"
    })
  },
  mounted: function() {
    this.getCurrentEvent();
  },
  watch: {
    "scene.no": function() {
      this.getCurrentEvent();
    }
  },
  methods: {
    //イベント進行管理
    getCurrentEvent() {
      for (event of this.eventScripts[this.scene.script][this.scene.no]) {
        this.dispatchEvent(...event);
      }
      // this.eventScripts[this.scene.script][this.scene.no];
    },

    clickEventViewer() {
      if (this.scene.isEnd) {
        this.$store.commit("setSe", "クリック.mp3");
        this.updateSceneNo();
      }
    },

    updateSceneNo() {
      if (this.eventScripts[this.scene.script].length > this.scene.no + 1) {
        this.$store.dispatch("increaseSceneNo");
      } else {
        console.log("イベント終了");
      }
    },

    changeEventScript(target) {
      this.$store.dispatch("updateSceneScript", target);
    },

    //イベントタイプに応じた処理の振り分け
    dispatchEvent(type, ...params) {
      if (type) {
        switch (type) {
          //シーン番号の変更を伴うメイン処理
          case "ev_msg":
            this.$store.dispatch("messageEvent", params[0]);
            break;
          case "ev_talk":
            this.$store.dispatch("talkEvent", {
              name: params[0],
              pos: params[1],
              text: params[2]
            });
            break;
          case "ev_select":
            this.$store.dispatch("selectEvent", params[0]);
            break;
          case "ev_place":
            this.$store.dispatch("placeEvent", {
              place: params[0],
              text: params[1]
            });
            break;
          //シーン番号に影響しないサブ処理
          case "npc":
            this.$store.dispatch("changeNpcImg", {
              name: params[0],
              pos: params[1]
            });
            break;
          case "opacity":
            this.$store.dispatch("changeNpcOpacity", {
              opacity: params[0],
              pos: params[1]
            });
            break;
          case "zIndex":
            this.$store.dispatch("changeNpcZindex", {
              zIndex: params[0],
              pos: params[1]
            });
            break;
          case "motion":
            this.$store.dispatch("changeNpcMotion", {
              motion: params[0],
              pos: params[1]
            });
          case "effect":
            this.$store.dispatch("changeNpcEffect", {
              effect: params[0],
              pos: params[1]
            });
          default:
            this.$store.commit("setSceneType", "none");
            break;
        }
      } else {
        this.eventError();
      }
    },
    resetEvent(type, content) {
      if (type) {
        switch (type) {
          case "init":
            this.$store.dispatch("resetNpcImg");
            this.$store.dispatch("messageEvent", "");
            break;
          case "npc":
            this.$store.dispatch("resetNpcImg");
            break;
          case "opacity":
            tihs.$store.dispatch("resetAllNpcOpacity");
            break;
          case "zIndex":
            tihs.$store.dispatch("resetAllNpcZIndex");
            break;
        }
      }
    },
    doSelectEvent(selectEvent) {
      selectEvent();
    },

    //イベント処理中に発生したエラーの共通処理
    eventError() {
      console.log("不正なイベントデータです");
    }
  }
};
</script>

<style scoped>
.event-container {
  position: relative;
  width: 800px;
  height: 600px;
  background: black;
  overflow: hidden;
}

.bg-container {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.selection-area {
  position: absolute;
  top: 160px;
  left: 80px;
  z-index: 100;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
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
