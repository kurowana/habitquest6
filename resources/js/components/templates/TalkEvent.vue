<template>
  <!-- <div>
    <div>シーン{{ this.eventState.isSceneEnd }}</div>
    <div>メッセージ{{ this.eventState.isMessageEnd }}</div>
    <game-menu></game-menu>
    <div @click="$_clickEventViewer">
      <talk-event-unit
        :event-state="eventState"
        @msg-changed="$_changeMessageEndFlag(false)"
        @msg-completed="$_changeMessageEndFlag(true)"
        @select-completed="completeSelection"
      ></talk-event-unit>
    </div>
    <pomodoro-unit></pomodoro-unit>
    <habit-unit></habit-unit>
  </div>-->
  <event-manager v-slot:default="gameState" :event-list="eventList" :event-flag="eventFlag">
    {{gameState}}
    <div>シーン{{ gameState.isSceneEnd }}</div>
    <div>メッセージ{{ gameState.isMessageEnd }}</div>

    <game-menu></game-menu>
    <talk-event-unit
      :event-state="gameState.eventState"
      @msg-changed="eventFlag.isMessageEnd=false"
      @msg-completed="eventFlag.isMessageEnd=true"
      @select-completed="completeSelection"
    ></talk-event-unit>
    <pomodoro-unit></pomodoro-unit>
    <habit-unit></habit-unit>
  </event-manager>
</template>

<script>
import TalkEventUnit from "../organisms/TalkEventUnit";
import GameMenu from "../molecules/GameMenu";
import PomodoroUnit from "../organisms/PomodoroUnit";
import HabitUnit from "../organisms/HabitUnit";

import baseMixin from "../../mixins/baseMixin";
import gameMixin from "../../mixins/gameMixin";

import EventManager from "../organisms/EventManager";

export default {
  components: {
    "talk-event-unit": TalkEventUnit,
    "game-menu": GameMenu,
    "pomodoro-unit": PomodoroUnit,
    "habit-unit": HabitUnit,
    "event-manager": EventManager
  },
  mixins: [baseMixin, gameMixin],
  props: {
    eventList: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {
      isShowModal: false,
      eventFlag: {
        isMessageEnd: false,
        isShowSelection: false
      }
    };
  },
  mounted: function() {
    // 親ページのイベントオブジェクトから現在シーンの処理を読み込み
    // this.$_getCurrentEvent();
  },
  watch: {
    // シーンが変わる度に処理を読み込み直す
    // "eventState.sceneNo": function() {
    //   this.$_getCurrentEvent();
    // }
  },
  methods: {
    completeSelection: function(event) {
      event();
      this.eventFlag.isShowSelection = false;
    }
  }
};
</script>

<style scoped></style>
