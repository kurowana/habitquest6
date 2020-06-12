<template>
  <div>
    <game-menu></game-menu>
    <div @click="$_clickEventViewer">
      <battle-event-unit
        :event-state="eventState"
        :user-obj="userObj"
        :monster-obj="monster"
        :is-show-command="isShowCommand"
        @msg-changed="$_changeMessageEndFlag(false)"
        @msg-completed="$_changeMessageEndFlag(true)"
        @recive-command="onCommand"
        @animation-end="motionReset"
      ></battle-event-unit>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import baseMixin from "../../mixins/baseMixin";

import BattleEventUnit from "../organisms/BattleEventUnit";
import GameMenu from "../molecules/GameMenu";

export default {
  components: {
    "battle-event-unit": BattleEventUnit,
    "game-menu": GameMenu
  },
  mixins: [baseMixin],
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
  data: function() {
    return {
      monster: {
        name: "",
        status: {
          hp: 100,
          currentHp: 100,
          mp: 100,
          currentMp: 100,
          atk: 10,
          matk: 10,
          def: 10,
          mdef: 10,
          spd: 10,
          hit: 10,
          avd: 10,
          cri: 10
        },
        imgPath: "images/monster/akuma01.png",
        motion: "none",
        effect: "none"
      },
      isPlayerTurnEnd: false,
      isMonsterTurnEnd: false,
      isShowCommand: false
    };
  },
  computed: {
    ...mapGetters({
      userObj: "getUser"
    })
  },
  mounted: function() {
    // 親ページのイベントオブジェクトから現在シーンの処理を読み込み
    this.$_getCurrentEvent();

    //モンスターリストから戦闘モンスターのランダム抽出処理
    this.$_setBattleMonster(this.monsterList);

    this.$_turnStart();
  },
  watch: {
    // シーンが変わる度に処理を読み込み直す
    "eventState.sceneNo": function() {
      this.$_getCurrentEvent();
    }
  },
  methods: {
    onCommand: function(command) {
      switch (command) {
        case "attack":
          this.attack();
          break;
        case "magic":
          this.magic();
          break;
        case "recover":
          this.recover();
          break;
      }
    },
    motionReset: function() {
      this.setMonsterMotion("none");
    },
    //モンスター管理
    setBattleMonster: function(list) {
      const max = list.length;
      const index = Math.floor(Math.random() * max);

      this.monster.name = list[index].name;
      this.monster.imgPath = list[index].imgPath;
      for (let i of Object.keys(list[index].status)) {
        this.monster.status[i] = list[index].status[i];
      }
      this.monster.status.currentHp = this.monster.status.hp;
      this.monster.status.currentMp = this.monster.status.mp;
    },

    // 戦闘管理
    turnStart: function() {
      this.isPlayerTurnEnd = false;
      this.isMonsterTurnEnd = false;
      console.log("戦闘開始");
      if (this.userObj.battleStatus.spd > this.monster.status.spd) {
        this.playerTurn();
      } else {
        this.monsterTurn();
      }
    },

    playerTurn: function() {
      this.isShowCommand = true;
    },
    monsterTurn: async function() {
      console.log("モンスター");
      this.setMonsterMotion("attack");
      this.setMonsterEffect("sword01_54");
      this.$store.commit("decreaseHp", 50);
      await this.$_sleep(300);
      this.setMonsterEffect("none");
      this.isMonsterTurnEnd = true;
      if (this.isPlayerTurnEnd === false) {
        this.playerTurn();
      } else {
        this.turnStart();
      }
    },

    attack: async function() {
      this.isShowCommand = false;
      console.log("通常攻撃");
      this.updatedMonsterHp(50);
      await this.$_sleep(1000);
      this.isPlayerTurnEnd = true;
      if (this.isMonsterTurnEnd === false) {
        this.monsterTurn();
      } else {
        this.turnStart();
      }
    },
    magic: async function() {
      this.isShowCommand = false;
      console.log("魔法攻撃");
      this.updatedMonsterHp(50);
      this.$store.commit("decreaseMp", 20);
      await this.$_sleep(1000);
      this.isPlayerTurnEnd = true;
      if (this.isMonsterTurnEnd === false) {
        this.monsterTurn();
      } else {
        this.turnStart();
      }
    },
    recover: async function() {
      this.isShowCommand = false;
      console.log("回復魔法");
      this.$store.commit("decreaseHp", -100);
      this.$store.commit("decreaseMp", 20);
      await this.$_sleep(1000);
      this.isPlayerTurnEnd = true;
      if (this.isMonsterTurnEnd === false) {
        this.monsterTurn();
      } else {
        this.turnStart();
      }
    },
    updatedMonsterHp: function(value) {
      if (this.monster.status.currentHp - value > 0) {
        this.monster.status.currentHp -= value;
      } else {
        this.battleResult();
      }
    },
    battleResult: function() {
      console.log("戦闘勝利");
      this.setBattleMonster(this.monsterList);
    },

    //戦闘演出関係
    setMonsterMotion(motion) {
      this.monster.motion = motion;
    },
    setMonsterEffect(effect) {
      this.monster.effect = effect;
    }
  }
};
</script>

<style scoped></style>
