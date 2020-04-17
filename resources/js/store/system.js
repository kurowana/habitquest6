const state = {
    //   ウィンドウサイズ、以下のサイズでレイアウトを変更する
    //   ~480px　スマホサイズ、
    //   480px~768px レティナスマホサイズ、
    //   768px~1280px タブレットサイズ、
    //   1280px~ PCサイズ
    windowWidth: 0,
    windowHeight: 0
};
const getters = {
    getWindowWidth: state => {
        return state.windowWidth;
    },
    getWindowHeight: state => {
        return state.windowHeight;
    }
};
const mutations = {
    setWindowWidth(state, width) {
        state.windowWidth = width;
    },
    setWindowHeight(state, height) {
        state.windowHeight = height;
    }
};
export default {
    state,
    getters,
    mutations
};
