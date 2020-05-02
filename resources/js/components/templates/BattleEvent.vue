<template>
  <div>
    <game-menu></game-menu>
    <div @click="$_clickEventViewer">
      <battle-event-unit
        :event-state="eventState"
        @msg-changed="$_changeMessageEndFlag(false)"
        @msg-completed="$_changeMessageEndFlag(true)"
      ></battle-event-unit>
    </div>
  </div>
</template>

<script>
import BattleEventUnit from "../organisms/BattleEventUnit";
import GameMenu from "../molecules/GameMenu";

import baseMixin from "../../mixins/baseMixin";
import eventMixin from "../../mixins/eventMixin";
import battleMixin from "../../mixins/battleMixin";

export default {
  components: {
    "battle-event-unit": BattleEventUnit,
    "game-menu": GameMenu
  },
  mixins: [baseMixin, eventMixin, battleMixin],
  props: {
    eventObj: {
      type: Array,
      required: true
    }
  },
  mounted: function() {
    // 親ページのイベントオブジェクトから現在シーンの処理を読み込み
    // 読み込み処理についてはeventMixinに記載
    this.$_getCurrentEvent();
  },
  watch: {
    // シーンが変わる度に処理を読み込み直す
    // 読み込み処理についてはeventMixinに記載
    "eventState.sceneNo": function() {
      this.$_getCurrentEvent();
    }
  },
  methods: {}
};
</script>

<style scoped>
</style>
