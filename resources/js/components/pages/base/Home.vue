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
            vm.mainEvent("msg", "シンプルなメッセージ\nかきくけこほにゃららら");
          }
        ]
      }
    };
  },
  computed: {},
  methods: {}
};
</script>
