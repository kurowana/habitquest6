const state = {
    isLogin: false,
    user: {
        id: "",
        name: "",
        lv: 0,
        point: 0,
        status: {
            str: 0,
            agi: 0,
            vit: 0,
            int: 0,
            dex: 0,
            luc: 0
        }
    }
};
const getters = {
    getLoginFlag: state => {
        return state.isLogin;
    },
    getUser: state => {
        return state.user;
    }
};
const mutations = {
    setLoginFlag(state, boolean) {
        state.isLogin = boolean;
    },
    setUser(state, user) {
        state.user.id = user.id;
        state.user.name = user.name;
        state.user.lv = user.lv;
        state.user.point = user.point;
        state.user.status.str = user.status.str;
        state.user.status.agi = user.status.agi;
        state.user.status.vit = user.status.vit;
        state.user.status.int = user.status.int;
        state.user.status.dex = user.status.dex;
        state.user.status.luc = user.status.luc;
    }
};
export default {
    state,
    getters,
    mutations
};
