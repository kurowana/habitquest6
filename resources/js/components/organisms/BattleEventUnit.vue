<template>
  <div class="event-container">
    <bg-viewer class="bg-container" :bg-img-obj="eventState.place"></bg-viewer>

    <life-window
      class="life-window-container"
      :current-hp="userObj.battleStatus.currentHp"
      :max-hp="userObj.battleStatus.hp"
      :current-mp="userObj.battleStatus.currentMp"
      :max-mp="userObj.battleStatus.mp"
    ></life-window>
    <life-window
      class="life-window-container"
      :current-hp="monsterObj.status.currentHp"
      :max-hp="monsterObj.status.hp"
      :current-mp="monsterObj.status.currentMp"
      :max-mp="monsterObj.status.mp"
    ></life-window>
    <div class="char-img-container">
      <npc-viewer :displaying-npc="eventState.npc"></npc-viewer>
    </div>
    <div class="battle-area-container">
      <battle-viewer :monsterObj="monsterObj"></battle-viewer>
    </div>
    <div class="msg-window-container">
      <msg-window
        :displaying-message="eventState.message"
        :is-scene-end="eventState.isSceneEnd"
        @msg-changed="hasChangedText"
        @msg-completed="hasCompletedText"
      ></msg-window>
    </div>
    <div class="command-menu">
      <command-menu @recive-command="reciveCommand"></command-menu>
    </div>
  </div>
</template>

<script>
import NpcViewer from "../molecules/NpcViewer";
import BattleViewer from "../molecules/BattleViewer";
import MsgWindow from "../molecules/MsgWindow";
import BgViewer from "../molecules/BgViewer";
import CommandMenu from "../molecules/CommandMenu";
import LifeWindow from "../molecules/LifeWindow";

export default {
  components: {
    "npc-viewer": NpcViewer,
    "battle-viewer": BattleViewer,
    "msg-window": MsgWindow,
    "bg-viewer": BgViewer,
    "command-menu": CommandMenu,
    "life-window": LifeWindow
  },
  props: {
    eventState: {
      type: Object,
      required: true
    },
    userObj: {
      type: Object,
      required: true
    },
    monsterObj: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {};
  },
  methods: {
    hasCompletedText: function() {
      this.$emit("msg-completed");
    },
    hasChangedText: function() {
      this.$emit("msg-changed");
    },
    reciveCommand: function(command) {
      this.$emit("attack");
    }
  }
};
</script>

<style scoped>
.event-container {
  position: relative;
  width: 800px;
  height: 600px;
  background: black;
  overflow: hidden;
}
.battle-area-container {
  position: relative;
  width: 800px;
  height: 600px;
  overflow: hidden;
}

.bg-container {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.command-menu {
  position: absolute;
  top: 200px;
  right: 0;
  z-index: 100;
}

.life-window-container {
  position: relative;
  z-index: 100;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* スマホ画面用 */
@media screen and (max-width: 480px) {
  .char-img-container {
    position: absolute;
    top: 0;
  }
  .msg-window-container {
    position: absolute;
    top: 200px;
  }
}
/* レティナスマホ用 */
@media screen and (min-width: 480px) and (max-width: 768px) {
  .char-img-container {
    position: absolute;
    top: 0;
  }
  .msg-window-container {
    position: absolute;
    top: 200px;
  }
}
/* タブレット用 */
@media screen and (min-width: 768px) and (max-width: 1280px) {
  .char-img-container {
    position: absolute;
    top: 0;
  }
  .msg-window-container {
    position: absolute;
    top: 400px;
  }
}
/* PC画面用 */
@media screen and (min-width: 1280px) {
  .char-img-container {
    position: absolute;
    top: 0;
  }
  .msg-window-container {
    position: absolute;
    top: 420px;
  }
}
</style>
