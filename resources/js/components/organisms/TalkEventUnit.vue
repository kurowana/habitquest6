<template>
  <div>
    <npc-viewer :displaying-npc="displayingNpc"></npc-viewer>
    <msg-window></msg-window>
  </div>
</template>

<script>
import NpcViewer from "../molecules/NpcViewer";
import MsgWindow from "../molecules/MsgWindow";

export default {
  components: {
    "npc-viewer": NpcViewer,
    "msg-window": MsgWindow
  },
  data: function() {
    return {
      displayingNpc: {
        L: {
          name: "ヤナギ",
          opacity: 1,
          zIndex: 10,
          motion: "none",
          effect: "none"
        },
        LC: {
          name: "エイル",
          opacity: 1,
          zIndex: 10,
          motion: "none",
          effect: "none"
        },
        C: {
          name: "フリート",
          opacity: 1,
          zIndex: 10,
          motion: "none",
          effect: "none"
        },
        RC: {
          name: "アイザック",
          opacity: 1,
          zIndex: 10,
          motion: "none",
          effect: "none"
        },
        R: {
          name: "スフィア1",
          opacity: 1,
          zIndex: 10,
          motion: "none",
          effect: "none"
        }
      }
    };
  }
};
</script>

<style scoped>
</style>