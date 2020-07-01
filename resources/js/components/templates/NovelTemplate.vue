<template>
  <event-manager :event-scripts="eventScripts">
    <game-menu></game-menu>
    <pomodoro-unit></pomodoro-unit>
    <habit-unit></habit-unit>
    <template v-slot:modal>
      <slot name="modal"></slot>
    </template>
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
    eventScripts: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {};
  },
  mounted: function() {},
  watch: {},
  methods: {}
};
</script>

<style scoped></style>
