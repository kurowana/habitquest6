<template>
  <div>
    <battle-event :event-obj="eventObj" :monster-list="monsterList" :boss-list="bossList"></battle-event>
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
          vm.$_setEvent({
            type: "msg",
            content: "ダンジョン"
          });
        }
      ],
      monsterList: [
        {
          name: "インプ",
          status: {
            hp: 150,
            atk: 20,
            matk: 10,
            def: 10,
            mdef: 10,
            spd: 10,
            hit: 10,
            avd: 10,
            cri: 10
          },
          imgPath: "images/monster/akuma01.png"
        },
        {
          name: "スライム",
          status: {
            hp: 100,
            atk: 10,
            matk: 10,
            def: 20,
            mdef: 10,
            spd: 10,
            hit: 10,
            avd: 10,
            cri: 10
          },
          imgPath: "images/monster/suraimu01.png"
        }
      ],
      bossList: [
        {
          name: "堕天使",
          status: {
            hp: 300,
            atk: 20,
            matk: 20,
            def: 20,
            mdef: 10,
            spd: 10,
            hit: 10,
            avd: 10,
            cri: 10
          },
          imgPath: "images/monster/datensi01.png"
        }
      ]
    };
  },
  computed: {},
  methods: {}
};
</script>
