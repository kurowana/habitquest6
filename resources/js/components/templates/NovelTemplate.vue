<template>
  <event-manager v-slot:default="gameState" :event-list="eventList" :event-flag="eventFlag">
    {{gameState}}
    <div>シーン{{ gameState.isSceneEnd }}</div>
    <div>メッセージ{{ gameState.isMessageEnd }}</div>

    <game-menu></game-menu>
    <talk-event-unit :event-state="gameState.eventState"></talk-event-unit>
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
  mounted: function() {},
  watch: {},
  methods: {}
};
</script>

<style scoped></style>
