import Vue from "vue";
import router from "./router";
import store from "./store";

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);

import AppBase from "./components/pages/AppBase.vue";
import WelcomeBase from "./components/pages/WelcomeBase.vue";

const app = new Vue({
    el: "#app",
    store,
    router,
    components: {
        "app-base": AppBase,
        "welcome-base": WelcomeBase
    }
});
