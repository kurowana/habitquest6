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
            vm.$store.dispatch("mainEvent", {
              type: "msg",
              content: "シンプルなメッセージ\nかきくけこほにゃららら"
            });
            vm.$store.dispatch("changeNpcImg", {
              name: "スフィア1",
              pos: "L"
            });
          },
          async function(vm) {
            vm.$store.dispatch("mainEvent", {
              type: "talk",
              content: {
                text: "トークイベント",
                name: "スフィア",
                pos: "L"
              }
            });
          },
          function(vm) {
            vm.$store.dispatch("mainEvent", {
              type: "select",
              content: [
                {
                  text: "選択肢1",
                  event: () => {
                    console.log(1);
                  }
                },
                {
                  text: "選択肢2",
                  event: () => {
                    console.log(2);
                  }
                }
              ]
            });
          }
        ]
      }
    };
  },
  computed: {},
  methods: {}
};
</script>
