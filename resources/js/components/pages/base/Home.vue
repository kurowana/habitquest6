<template>
  <novel :event-scripts="eventScripts"></novel>
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
          // 引数vmは、子コンポーネントのthis
          function(vm) {
            vm.coreEvent("msg", "シンプルなメッセージ\nかきくけこほにゃららら");
            vm.addEvent("npc", "スフィア1", "L");
          },
          function(vm) {
            vm.coreEvent("msg", "メッセージ2個目");
            vm.addEvent("npc", "スフィア1", "R");
          },
          function(vm) {
            vm.coreEvent("select", [
              {
                text: "test1",
                script: "event2"
              },
              {
                text: "text2",
                script: "event3"
              }
            ]);
          }
        ]
      }
    };
  },
  computed: {},
  methods: {}
};
</script>
