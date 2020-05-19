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
        bgm: {
            dir: "./sounds/bgm/",
            path: "./sounds/bgm/bgm_maoudamashii_fantasy01.mp3",
            volume: 0.1
        },
        se: {
            dir: "./sounds/se/",
            path: "./sounds/se/決定、ボタン押下4.mp3",
            volume: 0.2
        }
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
        state.sound.bgm.path = "";
        state.sound.bgm.path = state.sound.bgm.dir + path;
    },
    setSe(state, path) {
        state.sound.se.path = "";
        state.sound.se.path = state.sound.se.dir + path;
    },
    setBgmVolume(state, volume) {
        state.sound.bgm.volume = volume;
    },
    setSeVolume(state, volume) {
        state.sound.se.volume = volume;
    }
};
export default {
    state,
    getters,
    mutations
};
