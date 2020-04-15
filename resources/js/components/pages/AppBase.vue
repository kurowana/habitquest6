<template>
  <div>
    <b-container fluid>
      <b-row>
        {{this.windowWidth}}
        <b-col md="12" lg="6">
          <router-view name="gameUnit"></router-view>
        </b-col>
        <b-col md="12" lg="6">
          <router-view name="habitUnit"></router-view>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      // ウィンドウサイズの取得
      /*
      画面サイズの区切り、以下のサイズでレイアウトを変更する
      ~480px　スマホサイズ、
      480px~768px レティナスマホサイズ、
      768px~1280px タブレットサイズ、
      1280px~ PCサイズ
       */
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    };
  },
  methods: {
    //ウィンドウサイズ変更時の更新処理
    getWindowSize: function() {
      this.windowWidth = window.innerWidth;
      this.height = window.innerHeight;
    }
  },
  mounted: function() {
    //   ウィンドウサイズ変更検知用にイベント追加
    window.addEventListener("resize", this.getWindowSize);
  },
  beforeDestroy: function() {
    windwow.addEventListener("resize", this.getWindowSize);
  }
};
</script>
