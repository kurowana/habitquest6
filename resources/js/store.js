import Vue from "vue";
import Vuex from "vuex";
import systemStore from "./store/system";
import userStore from "./store/user";
import eventStore from "./store/event";
import battleStore from "./store/battle";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        systemStore,
        userStore,
        eventStore,
        battleStore
    }
});
export default store;
