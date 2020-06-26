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
            vm.addEvent("select", [
              {
                text: "test1",
                event: function() {
                  console.log(1);
                }
              },
              {
                text: "text2",
                event: function() {
                  console.log(2);
                }
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
