const state = {
    //   ウィンドウサイズ、以下のサイズでレイアウトを変更する
    //   ~480px　スマホサイズ、
    //   480px~768px レティナスマホサイズ、
    //   768px~1280px タブレットサイズ、
    //   1280px~ PCサイズ
    windowWidth: 0,
    windowHeight: 0,

    sound: {
        isPlay: false,
        bgmDir: "./sounds/bgm/",
        bgmPath: "./sounds/bgm/bgm_maoudamashii_fantasy01.mp3",
        seDir: "./sounds/se/",
        sePath: "./sounds/se/決定、ボタン押下4.mp3"
    }
};
const getters = {
    getWindowWidth: state => {
        return state.windowWidth;
    },
    getWindowHeight: state => {
        return state.windowHeight;
    },
    getSound: state => {
        return state.sound;
    }
};
const mutations = {
    setWindowWidth(state, width) {
        state.windowWidth = width;
    },
    setWindowHeight(state, height) {
        state.windowHeight = height;
    },
    setSoundFlag(state, boolean) {
        state.sound.isPlay = boolean;
    },
    setBgm(state, path) {
        state.sound.bgmPath = "";
        state.sound.bgmPath = state.sound.bgmDir + path;
    },
    setSe(state, path) {
        state.sound.sePath = "";
        state.sound.sePath = state.sound.seDir + path;
    }
};
export default {
    state,
    getters,
    mutations
};
