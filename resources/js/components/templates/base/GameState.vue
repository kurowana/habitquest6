<template>
  <div @click="clickEventViewer">
    <slot :event-state="eventState" :changeMessage="changeMessageEndFlag"></slot>
  </div>
</template>

<script>
import baseMixin from "../../../mixins/baseMixin";

export default {
  mixins: [baseMixin],
  props: {
    eventObj: {
      type: Array,
      required: true
    },
    eventFlag: false
  },
  data: function() {
    return {
      eventState: {
        sceneNo: 0,
        isSceneEnd: false,
        isMessageEnd: false,
        place: {
          current: "神殿",
          next: "",
          isShow: true
        },
        message: {
          name: " ",
          text: " "
        },
        selection: {
          isShow: false,
          content: null
        },
        npc: {
          L: {
            name: "",
            opacity: 1,
            zIndex: 10,
            motion: "none",
            effect: "none"
          },
          LC: {
            name: "",
            opacity: 1,
            zIndex: 10,
            motion: "none",
            effect: "none"
          },
          C: {
            name: "",
            opacity: 1,
            zIndex: 10,
            motion: "none",
            effect: "none"
          },
          RC: {
            name: "",
            opacity: 1,
            zIndex: 10,
            motion: "none",
            effect: "none"
          },
          R: {
            name: "",
            opacity: 1,
            zIndex: 10,
            motion: "none",
            effect: "none"
          }
        }
      }
    };
  },
  mounted: function() {
    this.getCurrentEvent();
  },
  watch: {
    "eventState.sceneNo": function() {
      this.getCurrentEvent();
    },
    "eventFlag.isMessageEnd": function() {
      this.changeMessageEndFlag();
      console.log("msg");
    },
    "eventFlag.isShowSelection": function() {
      this.completeSelection();
      console.log("select");
    }
  },
  methods: {
    //イベント進行管理
    getCurrentEvent() {
      const vm = this;
      this.eventObj[this.eventState.sceneNo](vm);
    },

    updateSceneNo() {
      if (this.eventObj.length > this.eventState.sceneNo + 1) {
        this.eventState.sceneNo++;
        this.eventState.isSceneEnd = false;
      } else {
        console.log("イベント終了");
      }
    },

    clickEventViewer() {
      if (this.eventState.isSceneEnd) {
        console.log(1);
        this.updateSceneNo();
        this.$store.commit("setSe", "クリック.mp3");
      }
    },

    changeMessageEndFlag() {
      this.eventState.isMessageEnd = this.eventFlag.isMessageEnd;
      if (this.eventFlag.isMessageEnd) {
        this.eventState.isSceneEnd = true;
      }
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
        if (this.eventState.message.text == text) {
          this.eventState.isSceneEnd = true;
        }
        this.eventState.message.text = text;
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