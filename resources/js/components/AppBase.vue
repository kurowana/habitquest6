<template>
  <div>
    <b-container fluid>
      <b-row>
        {{this.windowWidth}}
        <b-col md="12" lg="6">
          <router-view name="TalkEventUnit"></router-view>
        </b-col>
        <b-col md="12" lg="6">
          <router-view name="habitUnit"></router-view>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  data: function() {
    return {};
  },
  computed: {
    ...mapGetters({
      windowWidth: "getWindowWidth",
      windowHeight: "getWindowHeight"
    })
  },
  created: function() {
    this.getWindowSize();
  },
  mounted: function() {
    //   ウィンドウサイズ変更検知用にイベント追加
    window.addEventListener("resize", this.getWindowSize);
  },
  beforeDestroy: function() {
    windwow.addEventListener("resize", this.getWindowSize);
  },
  methods: {
    //ウィンドウサイズを取得し、storeに保存
    getWindowSize: function() {
      this.$store.commit("setWindowWidth", window.innerWidth);
      this.$store.commit("setWindowHeight", window.innerHeight);
    }
  }
};
</script>

<style scoped>
/* スマホ画面用 */
@media screen and (max-width: 480px) {
}
/* レティナスマホ用 */
@media screen and (min-width: 480px) and (max-width: 768px) {
}
/* タブレット用 */
@media screen and (min-width: 768px) and (max-width: 1280px) {
}
/* PC画面用 */
@media screen and (min-width: 1280px) {
}
</style>