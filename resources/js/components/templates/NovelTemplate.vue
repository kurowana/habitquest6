<template>
  <event-manager :event-list="eventList">
    <game-menu></game-menu>
    <pomodoro-unit></pomodoro-unit>
    <habit-unit></habit-unit>
  </event-manager>
</template>

<script>
import baseMixin from "../../mixins/baseMixin";

import EventManager from "../organisms/EventManager";
import GameMenu from "../molecules/GameMenu";
import PomodoroUnit from "../organisms/PomodoroUnit";
import HabitUnit from "../organisms/HabitUnit";

export default {
  components: {
    "event-manager": EventManager,
    "game-menu": GameMenu,
    "pomodoro-unit": PomodoroUnit,
    "habit-unit": HabitUnit
  },
  mixins: [baseMixin],
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
