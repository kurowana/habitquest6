import Vue from "vue";
import router from "./router";
import store from "./store";

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);

import AppBase from "./components/AppBase.vue";
import WelcomeBase from "./components/WelcomeBase.vue";

Vue.directive("bgm", function(el, binding) {
    if (binding.value.isPlay) {
        el.volume = binding.value.bgm.volume;
        el.play();
    } else {
        el.pause();
    }
});

Vue.directive("se", function(el, binding) {
    if (binding.value.isPlay) {
        el.volume = binding.value.bgm.volume;
        el.currentTime = 0;
        el.play();
    } else {
        el.pause();
    }
});

const app = new Vue({
    el: "#app",
    store,
    router,
    components: {
        "app-base": AppBase,
        "welcome-base": WelcomeBase
    }
});
