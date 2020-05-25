<template>
  <div>
    <game-menu></game-menu>
    <div @click="$_clickEventViewer">
      <battle-event-unit
        :event-state="eventState"
        :user-obj="userObj"
        :monster-obj="monster"
        @msg-changed="$_changeMessageEndFlag(false)"
        @msg-completed="$_changeMessageEndFlag(true)"
        @attack="attackTest"
      ></battle-event-unit>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

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
    },
    monsterList: {
      type: Array,
      required: true
    },
    bossList: {
      type: Array,
      required: false
    }
  },
  computed: {
    ...mapGetters({
      userObj: "getUser"
    })
  },
  mounted: function() {
    // 親ページのイベントオブジェクトから現在シーンの処理を読み込み
    // 読み込み処理についてはeventMixinに記載
    this.$_getCurrentEvent();

    //モンスターリストから戦闘モンスターのランダム抽出処理
    this.$_setBattleMonster(this.monsterList);
  },
  watch: {
    // シーンが変わる度に処理を読み込み直す
    // 読み込み処理についてはeventMixinに記載
    "eventState.sceneNo": function() {
      this.$_getCurrentEvent();
    }
  },
  methods: {
    attackTest: function() {
      this.$_attack(30);
    }
  }
};
</script>

<style scoped></style>
