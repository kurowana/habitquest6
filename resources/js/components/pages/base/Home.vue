<template>
  <novel :event-scripts="eventScripts">
    <template v-slot:modal></template>
  </novel>
</template>

<script>
import NovelTemplate from "../../templates/NovelTemplate";

export default {
  components: {
    novel: NovelTemplate
  },
  data: function() {
    return {
      eventScripts: {
        event1: [
          [
            ["ev_msg", "シンプルなメッセージ\nかきくけこほにゃららら"],
            ["npc", "スフィア1", "L"]
          ],
          [
            ["ev_msg", "メッセージ2個目"],
            ["npc", "スフィア1", "R"]
          ],
          [["ev_talk", "スフィア", "L", "トークテスト"]]
        ]
      }
    };
  },
  computed: {},
  methods: {}
};
</script>
