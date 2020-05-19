<template>
    <div class="content-wrapper">
        <sound-player></sound-player>
        {{ this.windowWidth }}
        {{ this.isSetup }}
        {{ this.userId }}
        <router-view name="gameUnit"></router-view>
        <router-view name="habitUnit"></router-view>
    </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

import baseMixin from "../mixins/baseMixin";
import SoundPlayer from "./atoms/SoundPlayer";

export default {
    mixins: [baseMixin],
    components: {
        "sound-player": SoundPlayer
    },
    props: {
        userId: {
            type: String,
            required: true
        },
        isSetup: {
            type: String,
            required: true
        }
    },
    computed: {
        ...mapGetters({
            windowWidth: "getWindowWidth",
            windowHeight: "getWindowHeight"
        })
    },
    data: function() {
        return {};
    },
    created: function() {
        this.getWindowSize();
    },
    mounted: function() {
        //   ウィンドウサイズ変更検知用にイベント追加
        window.addEventListener("resize", this.getWindowSize);

        if (this.isSetup == false) {
            //キャラクター情報が未登録の場合はオープニングイベントへ移動
            this.$router.push({ name: "opening" }).catch(err => {});
        } else {
            //登録済みの場合はキャラ情報をstoreに格納してホームへ移動
            this.$router.push({ name: "home" }).catch(err => {});
        }
    },
    beforeDestroy: function() {
        windwow.removeEventListener("resize", this.getWindowSize);
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
.content-wrapper {
    position: relative;
}

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
