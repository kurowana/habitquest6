<template>
  <div>
    <npc-viewer :displaying-npc="displayingNpc"></npc-viewer>
  </div>
</template>

<script>
import NpcViewer from "../molecules/NpcViewer";
export default {
  components: {
    "npc-viewer": NpcViewer
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
          name: "あんな",
          opacity: 1,
          zIndex: 10,
          motion: "none",
          effect: "none"
        },
        C: {
          name: "神",
          opacity: 1,
          zIndex: 10,
          motion: "none",
          effect: "none"
        },
        RC: {
          name: "あああ",
          opacity: 1,
          zIndex: 10,
          motion: "none",
          effect: "none"
        },
        R: {
          name: "いいい",
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