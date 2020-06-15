<template>
  <novel :event-list="eventList"></novel>
</template>

<script>
import NovelTemplate from "../../templates/NovelTemplate";

export default {
  components: {
    novel: NovelTemplate
  },
  data: function() {
    return {
      eventList: {
        event1: [
          // 引数vmは、子コンポーネントのthis
          function(vm) {
            vm.setEvent({
              type: "msg",
              content: "シンプルなメッセージ\nかきくけこほにゃららら"
            });
            vm.setNpcImg("スフィア1", "L");
          },
          async function(vm) {
            vm.setEvent({
              type: "talk",
              content: {
                text: "トークイベント検証",
                name: "スフィア",
                pos: "L"
              }
            });

            vm.setNpcMotion("right-slide", "L");
            vm.setNpcEffect("death", "L");
          },
          function(vm) {
            vm.setEvent({
              type: "select",
              content: [
                {
                  text: "選択肢1",
                  event: () => {
                    vm.setEvent({
                      type: "msg",
                      content: "選択肢1"
                    });
                  }
                },
                {
                  text: "イベントチェンジ",
                  event: () => {
                    vm.changeTargetEvent("event2");
                  }
                }
              ]
            });
          },
          function(vm) {
            vm.setEvent({
              type: "place",
              content: {
                place: "街",
                text: "場面転換"
              }
            });
          },
          function(vm) {
            vm.setEvent({
              type: "msg",
              content: "終了直前メッセージ"
            });
          }
        ],
        event2: [
          function(vm) {
            vm.setEvent({
              type: "msg",
              content: "イベントオブジェ変更"
            });
            vm.setNpcImg("スフィア1", "L");
          },
          function(vm) {
            vm.setEvent({
              type: "msg",
              content: "イベントオブジェ変更1"
            });
            vm.setNpcImg("スフィア1", "L");
          }
        ]
      }
    };
  },
  computed: {},
  methods: {}
};
</script>
