<template>
  <div>
    <battle-event :event-obj="eventObj"></battle-event>
  </div>
</template>

<script>
import BattleEvent from "../../templates/BattleEvent";

export default {
  components: {
    "battle-event": BattleEvent
  },
  data: function() {
    return {
      eventObj: [
        // 引数vmは、子コンポーネントのthis
        function(vm) {
          vm.$_setMessage("ヤナギ", "ダンジョンイベント1");
          vm.$_setNpcImg("ヤナギ", "L");
        },
        function(vm) {
          vm.$_setMessage("ナタ", "キャラクター追加");
          vm.$_setNpcImg("ナタ", "LC");
        },
        function(vm) {
          vm.$_setMessage("ゼノビア", "左右判定テスト");
          vm.$_setNpcImg("ゼノビア", "R");
        },
        function(vm) {
          vm.$_setNpcImg("", "L");
          vm.$_setTalk("ゼノビア", "トーク関数テスト", "R");
        },
        function(vm) {
          vm.$_setEventPlace("小屋");
          vm.$_setTalk("ゼノビア", "トーク関数テスト2", "R");
        },
        function(vm) {
          vm.$_setTalk("ナタ", "トーク関数テスト、切り替え", "LC");
          vm.$_resetAllZIndex();
        },
        function(vm) {
          vm.$_resetAllOpacity();
        },
        function(vm) {
          vm.$_resetNpcImg();
          vm.$_resetMessage();
        }
      ]
    };
  },
  computed: {},
  methods: {}
};
</script>
