<template>
    <div>
        <button @click="playMusic">音楽再生</button>
        <button @click="playMusic2">音楽再生2</button>
        <button @click="playMusic3">音楽再生3</button>

        <input
            type="range"
            :value="soundInfo.bgm.volume"
            min="0"
            max="1"
            step="0.1"
            @change="volumeChange"
        />
        <audio
            id="bgmPlayer"
            v-bgm="soundInfo"
            :src="soundInfo.bgm.path"
            loop
        ></audio>
        <audio id="sePlayer" v-se="soundInfo" :src="soundInfo.se.path"></audio>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters({
            windowWidth: "getWindowWidth",
            windowHeight: "getWindowHeight",
            soundInfo: "getSound"
        })
    },
    mounted: function() {
        // const bgm = document.getElementById("bgmPlayer");
        // bgm.addEventListener("ended", function() {});
        // const se = document.getElementById("sePlayer");
        // se.addEventListener("ended", function() {});
    },
    methods: {
        playMusic: function() {
            this.$store.commit("setSoundFlag", true);
        },
        playMusic2: function() {
            this.$store.commit("setSe", "カーソル移動2.mp3");
            this.$store.commit("setBgm", "bgm_maoudamashii_fantasy11.mp3");
        },
        playMusic3: function() {
            this.$store.commit("setSe", "決定、ボタン押下4.mp3");
        },
        volumeChange: function(e) {
            this.$store.commit("setBgmVolume", e.target.value);
        }
    }
};
</script>

<style scoped></style>
