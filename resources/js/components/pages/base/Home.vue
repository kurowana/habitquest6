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
            ["msg", "シンプルなメッセージ\nかきくけこほにゃららら"],
            ["npc", "スフィア1", "L"]
          ],
          [
            ["msg", "メッセージ2個目"],
            ["npc", "スフィア1", "R"]
          ]

          // 引数vmは、子コンポーネントのthis
          // () => {
          //   this.coreEvent(
          //     "msg",
          //     "シンプルなメッセージ\nかきくけこほにゃららら"
          //   );
          //   this.addEvent("npc", "スフィア1", "L");
          // },
          // function() {
          //   this.coreEvent("msg", "メッセージ2個目");
          //   this.addEvent("npc", "スフィア1", "R");
          // }
        ]
      }
    };
  },
  computed: {},
  methods: {}
};
</script>
