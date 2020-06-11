<template>
  <div class="event-container" @click="clickEventViewer">
    <slot :event-state="eventState"></slot>
    <bg-viewer class="bg-container" :bg-img-obj="eventState.place"></bg-viewer>
    <npc-viewer class="char-img-container" :displaying-npc="eventState.npc"></npc-viewer>
    <msg-window class="msg-window-container"></msg-window>
    <selection-list class="selection-area" v-if="eventState.selection.isShow"></selection-list>
  </div>
</template>

<script>
import baseMixin from "../../mixins/baseMixin";
import { mapGetters } from "vuex";

import NpcViewer from "../molecules/NpcViewer";
import MsgWindow from "../molecules/MsgWindow";
import bgViewer from "../molecules/BgViewer";
import SelectionList from "../molecules/SelectionList";

export default {
  mixins: [baseMixin],
  components: {
    "npc-viewer": NpcViewer,
    "msg-window": MsgWindow,
    "bg-viewer": bgViewer,
    "selection-list": SelectionList
  },
  props: {
    eventList: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {};
  },
  computed: {
    ...mapGetters({
      eventState: getEventState,
      message: getMessage,
      selection: getSelection
    })
  },
  mounted: function() {
    this.getCurrentEvent();
  },
  watch: {
    "event.sceneNo": function() {
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
      this.eventList[this.eventState.current][this.eventState.sceneNo](vm);
    },

    updateSceneNo() {
      if (
        this.eventList[this.eventState.current].length >
        this.eventState.sceneNo + 1
      ) {
        this.$store.dispatch(updateSceneNo, this.eventState.sceneNo + 1);
        this.$store.dispatch(updateSceneFlag, false);
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

    changeTargetEvent(target) {
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
    messageEvent(text) {
      if (typeof text === "string") {
        // 同じ文が続く場合、文の変更および完了イベントが発火しないので対応
        if (this.message.text == text) {
          this.$store.dispatch("updateSceneFlag", true);
        }
        this.$store.dispatch("updateMessage", { name: "", text: text });
      } else {
        this.eventError();
      }
    },

    // 話し手が存在するメッセージ処理。対象キャラの名前表示、強調表示つき
    talkEvent(text, name, pos) {
      this.messageEvent(text);
      this.setTalkerName(name);
      this.toBackAllCharacter();
      this.toForwardCharacter(pos);
    },

    selectEvent(selection) {
      //ここから編集
      if (Array.isArray(selection)) {
        this.$set(this.eventState.selection, "content", selection);
        this.eventState.selection.isShow = true;
      }
    },

    completeSelection: function(event) {
      this.eventState.selection.isShow = false;
    },

    async changePlaceEvent(place, text) {
      this.setPlace(place);
      await this.$_sleep(1000);
      this.messageEvent(text);
    },

    // キャラクター画像表示系
    setNpcImg(name, pos) {
      this.eventState.npc[pos].name = name;
    },

    resetNpcImg() {
      for (let k of Object.keys(this.eventState.npc)) {
        this.eventState.npc[k].name = "";
        this.eventState.npc[k].opacity = 1;
        this.eventState.npc[k].zIndex = 10;
        this.eventState.npc[k].motion = "none";
        this.eventState.npc[k].effect = 1;
      }
    },
    setOpacity(pos, value) {
      this.eventState.npc[pos].opacity = value;
    },
    resetOpacity(pos) {
      this.eventState.npc[pos].opacity = 1;
    },
    resetAllOpacitye() {
      for (let k of Object.keys(this.eventState.npc)) {
        this.eventState.npc[k].opacity = 1;
      }
    },
    setZIndex(pos, value) {
      this.eventState.npc[pos].zIndex = value;
    },
    resetZIndex(pos) {
      this.eventState.npc[pos].zIndex = 10;
    },
    resetAllZIndex() {
      for (let k of Object.keys(this.eventState.npc)) {
        this.eventState.npc[k].zIndex = 10;
      }
    },

    //NPC画像のモーション
    setNpcMotion(motion, pos) {
      for (let k of Object.keys(this.eventState.npc)) {
        this.eventState.npc[k].zIndex = 10;
      }
      this.eventState.npc[pos].zIndex = 20;
      this.eventState.npc[pos].motion = motion;
    },

    //NPC画像のエフェクト
    setNpcEffect(effect, pos) {
      for (let k of Object.keys(this.eventState.npc)) {
        this.eventState.npc[k].zIndex = 10;
      }
      this.eventState.npc[pos].zIndex = 20;
      this.eventState.npc[pos].effect = effect;
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
        this.eventState.npc[pos].opacity = 1;
        this.eventState.npc[pos].zIndex = 10;
      } else {
        this.eventError();
      }
    },
    toForwardAllCharacter() {
      for (let k of Object.keys(this.eventState.npc)) {
        this.eventState.npc[k].opacity = 1;
        this.eventState.npc[k].zIndex = 10;
        this.eventState.npc[k].motion = "none";
        this.eventState.npc[k].effect = "none";
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
        this.eventState.npc[pos].opacity = 0.8;
        this.eventState.npc[pos].zIndex = 5;
      } else {
        this.eventError();
      }
    },
    toBackAllCharacter() {
      for (let k of Object.keys(this.eventState.npc)) {
        this.eventState.npc[k].opacity = 0.8;
        this.eventState.npc[k].zIndex = 5;
        this.eventState.npc[k].motion = "none";
        this.eventState.npc[k].effect = "none";
      }
    },

    //メッセージウィンドウの名前欄の表示処理
    setTalkerName(name) {
      if (typeof name === "string") {
        this.eventState.message.name = name;
      } else {
        this.eventError();
      }
    },

    //メッセージウィンドウの初期化処理
    resetMessage() {
      this.eventState.message.name = " ";
      this.eventState.message.text = " ";
    },

    // 舞台演出関連
    async setPlace(place) {
      this.eventState.place.next = place;
      this.eventState.place.isShow = false;
      await this.$_sleep(500);
      this.eventState.place.current = place;
      this.eventState.place.isShow = true;
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
