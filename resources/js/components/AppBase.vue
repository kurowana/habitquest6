<template>
    <div class="content-wrapper">
        <button @click="playMusic">音楽再生</button>
        <button @click="playMusic2">音楽再生2</button>
        <button @click="playMusic3">音楽再生3</button>
        {{ this.windowWidth }}
        {{ this.isSetup }}
        {{ this.userId }}
        <router-view name="gameUnit"></router-view>
        <router-view name="habitUnit"></router-view>

        <audio
            id="bgmPlayer"
            v-bgm="soundInfo.isPlay"
            :src="soundInfo.bgmPath"
            loop="true"
        ></audio>
        <audio
            id="sePlayer"
            v-se="soundInfo.isPlay"
            :src="soundInfo.sePath"
        ></audio>
    </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

import baseMixin from "../mixins/baseMixin";

export default {
    mixins: [baseMixin],
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
    data: function() {
        return {};
    },
    computed: {
        ...mapGetters({
            windowWidth: "getWindowWidth",
            windowHeight: "getWindowHeight",
            soundInfo: "getSound"
        })
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

        // const bgm = document.getElementById("bgmPlayer");
        // bgm.addEventListener("ended", function() {});

        // const se = document.getElementById("sePlayer");
        // se.addEventListener("ended", function() {});
    },
    beforeDestroy: function() {
        windwow.removeEventListener("resize", this.getWindowSize);
    },
    methods: {
        //ウィンドウサイズを取得し、storeに保存
        getWindowSize: function() {
            this.$store.commit("setWindowWidth", window.innerWidth);
            this.$store.commit("setWindowHeight", window.innerHeight);
        },
        playMusic: function() {
            this.$store.commit("setSoundFlag", true);
        },
        playMusic2: function() {
            this.$store.commit("setSe", "カーソル移動2.mp3");
            this.$store.commit("setBgm", "bgm_maoudamashii_fantasy11.mp3");
        },
        playMusic3: function() {
            this.$store.commit("setSe", "決定、ボタン押下4.mp3");
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
