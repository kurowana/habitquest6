<template>
  <div class="menu-area">
    <menu-button :to-func="this.toHome" button-text="ホーム"></menu-button>
    <menu-button :to-func="this.toOpening" button-text="オープニング"></menu-button>
    <menu-button :to-func="this.toDungeon" button-text="ダンジョン"></menu-button>
  </div>
</template>

<script>
import MenuButton from "../atoms/MenuButton";

export default {
  components: {
    "menu-button": MenuButton
  },
  methods: {
    toHome: function() {
      this.$router.push({ name: "home" }).catch(err => {});
    },
    toOpening: function() {
      this.$router.push({ name: "opening" }).catch(err => {});
    },
    toDungeon: function() {
      this.$router.push({ name: "dungeon" }).catch(err => {});
    }
  }
};
</script>

<style scoped>
.menu-area {
  margin-bottom: 10px;
}
</style>
