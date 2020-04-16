import Vue from "vue";
import Vuex from "vuex";
import systemStore from "./store/system";
import userStore from "./store/user";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        systemStore,
        userStore
    }
});
export default store;
