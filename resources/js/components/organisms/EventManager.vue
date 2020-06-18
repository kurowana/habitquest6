<template>
  <div class="event-container" @click="clickEventViewer">
    <slot></slot>
    <npc-viewer class="char-img-container"></npc-viewer>
    <msg-window class="msg-window-container"></msg-window>
    <selection-list class="selection-area" v-if="selection.isDisplay" @selected="doSelectEvent"></selection-list>
    <background-img class="bg-container"></background-img>
  </div>
</template>

<script>
import baseMixin from "../../mixins/baseMixin";
import { mapGetters } from "vuex";

import NpcViewer from "../molecules/NpcViewer";
import MsgWindow from "../molecules/MsgWindow";
import SelectionList from "../molecules/SelectionList";
import BackgroundImg from "../atoms/BackgroundImg";

export default {
  mixins: [baseMixin],
  components: {
    "npc-viewer": NpcViewer,
    "msg-window": MsgWindow,
    "selection-list": SelectionList,
    "background-img": BackgroundImg
  },
  props: {
    scripts: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {};
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
    "eventState.sceneNo": function() {
      this.getCurrentEvent();
    },
    "message.isMessageEnd": function() {
      this.changeMessageEndFlag();
      console.log("msg");
    },
    "selection.isDisplay": function() {
      console.log("select");
    }
  },
  methods: {
    //イベント進行管理
    getCurrentEvent() {
      const vm = this;
      this.scripts[this.scene.script][this.scene.no](vm);
    },

    updateSceneNo() {
      if (
        this.eventList[this.eventState.current].length >
        this.eventState.sceneNo + 1
      ) {
        this.$store.dispatch("updateSceneNo", this.eventState.sceneNo + 1);
        this.$store.dispatch("updateSceneFlag", false);
      } else {
        console.log("イベント終了");
      }
    },

    clickEventViewer() {
      if (this.eventState.isSceneEnd) {
        this.$store.commit("setSe", "クリック.mp3");
        this.updateSceneNo();
      }
    },

    //ここの処理、あとで考え直す
    changeMessageEndFlag() {
      if (this.message.isMessageEnd) {
        this.$store.dispatch("updateSceneFlag", true);
      }
    },

    changeEventScript(target) {
      this.$dispatch("updateCurrentEvent", target);
      this.$dispatch("updateSceneNo", 0);
    },

    //イベントタイプに応じた処理の振り分け
    setEvent(event) {
      if (event.type) {
        switch (event.type) {
          case "msg":
            this.messageEvent(event.content);
            break;
          case "talk":
            this.talkEvent(
              event.content.text,
              event.content.name,
              event.content.pos
            );
            break;
          case "select":
            this.selectEvent(event.content);
            break;
          case "place":
            this.changePlaceEvent(event.content.place, event.content.text);
            break;
          default:
            this.eventError();
            break;
        }
      } else {
        this.eventError();
      }
    },
    //メッセージウィンドウへの文章表示処理
    // messageEvent(text) {
    //   if (typeof text === "string") {
    //     // 同じ文が続く場合、文の変更および完了イベントが発火しないので対応
    //     if (this.message.text == text) {
    //       this.$store.dispatch("updateSceneFlag", true);
    //     }
    //     this.$store.dispatch("updateMessage", { name: "", text: text });
    //   } else {
    //     this.eventError();
    //   }
    // },

    // 話し手が存在するメッセージ処理。対象キャラの名前表示、強調表示つき
    // talkEvent(text, name, pos) {
    //   this.$store.dispatch("updateMessage", { name: name, text: text });
    //   this.toBackAllCharacter();
    //   this.toForwardCharacter(pos);
    // },

    selectEvent(selection) {
      if (Array.isArray(selection)) {
        this.$store.dispatch("updateSelectionContent,selection");
        this.$store.dispatch("updateSelectionFlag", true);
      }
    },

    doSelectEvent: function(event) {
      event();
      this.$store.dispatch("updateSelectionFlag", false);
    },

    async changePlaceEvent(place, text) {
      this.setPlace(place);
      await this.$_sleep(1000);
      this.messageEvent(text);
    },

    // キャラクター画像表示系
    // setNpcImg(name, pos) {
    //   this.$store.dispatch("updateNpc", { name: name, position: pos });
    // },

    // resetNpcImg() {
    //   for (let k of Object.keys(this.npc)) {
    //     this.$store.dispatch("updateNpc", { name: "", position: k });
    //     this.$store.dispatch("updateNpcOpacity", { opacity: 1, position: k });
    //     this.$store.dispatch("updateNpcZIndex", { zIndex: 10, position: k });
    //     this.$store.dispatch("updateNpcMotion", {
    //       motion: "none",
    //       position: k
    //     });
    //     this.$store.dispatch("updateNpcEffect", {
    //       effect: "none",
    //       position: k
    //     });
    //   }
    // },
    // setOpacity(value, pos) {
    //   this.$store.dispatch("updateNpcOpacity", {
    //     opacity: value,
    //     position: pos
    //   });
    // },
    resetOpacity(pos) {
      this.$store.dispatch("updateNpcOpacity", {
        opacity: 1,
        position: pos
      });
    },
    resetAllOpacitye() {
      for (let k of Object.keys(this.npc)) {
        this.$store.dispatch("updateNpcOpacity", {
          opacity: 1,
          position: k
        });
      }
    },
    setZIndex(value, pos) {
      this.$store.dispatch("updateNpcZIndex", { zIndex: value, position: pos });
    },
    resetZIndex(pos) {
      this.$store.dispatch("updateNpcZIndex", { zIndex: 10, position: pos });
    },
    resetAllZIndex() {
      for (let k of Object.keys(this.npc)) {
        this.$store.dispatch("updateNpcZIndex", { zIndex: 10, position: k });
      }
    },

    //NPC画像のモーション
    setNpcMotion(motion, pos) {
      for (let k of Object.keys(this.npc)) {
        this.$store.dispatch("updateNpcZIndex", { zIndex: 10, position: k });
      }
      this.$store.dispatch("updateNpcZIndex", { zIndex: 20, position: pos });
      this.$store.dispatch("updateNpcMotion", {
        motion: motion,
        position: pos
      });
    },

    //NPC画像のエフェクト
    setNpcEffect(effect, pos) {
      for (let k of Object.keys(this.npc)) {
        this.$store.dispatch("updateNpcZIndex", { zIndex: 10, position: k });
      }
      this.$store.dispatch("updateNpcZIndex", { zIndex: 20, position: pos });
      this.$store.dispatch("updateNpcEffect", {
        effect: effect,
        position: pos
      });
    },

    //Talk処理用の重ね順、不透明度一括処理
    toForwardCharacter(pos) {
      if (
        pos === "L" ||
        pos === "LC" ||
        pos === "C" ||
        pos === "RC" ||
        pos === "R"
      ) {
        this.$store.dispatch("updateNpcOpacity", { opacity: 1, position: pos });
        this.$store.dispatch("updateNpcZIndex", { zIndex: 20, position: pos });
        this.$store.dispatch("updateNpcMotion", {
          motion: "none",
          position: pos
        });
        this.$store.dispatch("updateNpcEffect", {
          effect: "none",
          position: pos
        });
      } else {
        this.eventError();
      }
    },
    toForwardAllCharacter() {
      for (let k of Object.keys(this.npc)) {
        this.toForwardCharacter(k);
      }
    },
    toBackCharacter(pos) {
      if (
        pos === "L" ||
        pos === "LC" ||
        pos === "C" ||
        pos === "RC" ||
        pos === "R"
      ) {
        this.$store.dispatch("updateNpcOpacity", {
          opacity: 0.8,
          position: pos
        });
        this.$store.dispatch("updateNpcZIndex", { zIndex: 5, position: pos });
        this.$store.dispatch("updateNpcMotion", {
          motion: "none",
          position: pos
        });
        this.$store.dispatch("updateNpcEffect", {
          effect: "none",
          position: pos
        });
      } else {
        this.eventError();
      }
    },
    toBackAllCharacter() {
      for (let k of Object.keys(this.npc)) {
        this.toBackCharacter(k);
      }
    },

    //メッセージウィンドウの初期化処理
    resetMessage() {
      this.$store.dispatch("updateMessage", { name: "", text: "" });
    },

    // 舞台演出関連
    async setPlace(place) {
      this.$store.dispatch("updateNextPlace", place);
      this.$store.dispatch("updatePlaceFlag", false);
      await this.$_sleep(500);
      this.$store.dispatch("updateCurrentPlace", place);
      this.$store.dispatch("updatePlaceFlag", true);
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
