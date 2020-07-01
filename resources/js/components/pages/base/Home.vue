<template>
  <novel :event-scripts="eventScripts">
    <template v-slot:modal>
      <div v-if="test1">test1</div>
      <div v-if="test2">test1</div>
    </template>
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
          // 引数vmは、子コンポーネントのthis
          function(vm) {
            vm.coreEvent("msg", "シンプルなメッセージ\nかきくけこほにゃららら");
            vm.addEvent("npc", "スフィア1", "L");
          },
          function(vm) {
            vm.isDisplayModal = true;
            vm.test1 = true;
            vm.coreEvent("msg", "メッセージ2個目");
            vm.addEvent("npc", "スフィア1", "R");
          },
          function(vm) {
            vm.test1 = false;
            vm.test2 = true;
            vm.isDisplayModal = true;
          }
        ]
      }
    };
  },
  computed: {},
  methods: {}
};
</script>
