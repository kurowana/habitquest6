import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./components/pages/base/Home.vue";
import Opening from "./components/pages/events/Opening.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "main",
        components: {
            gameUnit: Opening
        }
    },
    {
        path: "/home",
        name: "home",
        components: {
            gameUnit: Home
        }
    },
    {
        path: "/opening",
        name: "opening",
        components: {
            gameUnit: Opening
        }
    }
];

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;
