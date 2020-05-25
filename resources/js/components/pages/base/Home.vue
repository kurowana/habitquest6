<template>
  <div>
    <talk-event :event-obj="eventObj"></talk-event>
  </div>
</template>

<script>
import TalkEvent from "../../templates/TalkEvent";

export default {
  components: {
    "talk-event": TalkEvent
  },
  data: function() {
    return {
      eventObj: [
        // 引数vmは、子コンポーネントのthis
        function(vm) {
          vm.$_setEvent({
            type: "msg",
            content: "シンプルなメッセージ"
          });
          vm.$_setNpcImg("スフィア1", "L");
        },
        async function(vm) {
          vm.$_setEvent({
            type: "talk",
            content: {
              text: "トークイベント検証",
              name: "スフィア",
              pos: "L"
            }
          });

          vm.$_setNpcMotion("right-slide", "L");
          vm.$_setNpcEffect("death", "L");
        },
        function(vm) {
          vm.$_setEvent({
            type: "select",
            content: [
              {
                text: "選択肢1",
                event: () => {
                  vm.$_setEvent({
                    type: "msg",
                    content: "選択肢1"
                  });
                }
              },
              {
                text: "選択肢2",
                event: () => {
                  vm.$_setEvent({
                    type: "msg",
                    content: "選択肢2"
                  });
                }
              }
            ]
          });
        },
        function(vm) {
          vm.$_setEvent({
            type: "place",
            content: {
              place: "街",
              text: "場面転換"
            }
          });
        },
        function(vm) {
          vm.$_setEvent({
            type: "msg",
            content: "終了直前メッセージ"
          });
        }
      ]
    };
  },
  computed: {},
  methods: {}
};
</script>
