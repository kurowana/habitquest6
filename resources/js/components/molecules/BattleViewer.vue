<template>
  <div class="battle-viewer">
    <monster-img :monster="monsterObj" @animation-end="reciveAnimationEnd"></monster-img>
  </div>
</template>

<script>
import MonsterImg from "../atoms/MonsterImg";

export default {
  components: {
    "monster-img": MonsterImg
  },
  props: {
    monsterObj: {
      type: Object,
      required: true
    }
  },
  methods: {
    reciveAnimationEnd: function() {
      this.$emit("animation-end");
    }
  }
};
</script>

<style scoped>
.battle-viewer {
}
</style>
