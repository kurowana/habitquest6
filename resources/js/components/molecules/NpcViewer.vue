<template>
  <div>
    <npc-img :target-npc="npcNameL" direction="left"></npc-img>
    <npc-img :target-npc="npcNameLC" direction="left"></npc-img>
    <npc-img :target-npc="npcNameC" direction="left"></npc-img>
    <npc-img :target-npc="npcNameRC" direction="right"></npc-img>
    <npc-img :target-npc="npcNameR" direction="right"></npc-img>
  </div>
</template>

<script>
import NpcImg from "../atoms/NpcImg";
export default {
  components: {
    "npc-img": NpcImg
  },
  props: {
    displayingNpc: {
      type: Object,
      required: true
    }
  },
  computed: {
    npcNameL: function() {
      return this.displayingNpc.L.name;
    },
    npcNameLC: function() {
      return this.displayingNpc.LC.name;
    },
    npcNameC: function() {
      return this.displayingNpc.C.name;
    },
    npcNameRC: function() {
      return this.displayingNpc.RC.name;
    },
    npcNameR: function() {
      return this.displayingNpc.R.name;
    }
  }
};
</script>

<style scoped>
</style>