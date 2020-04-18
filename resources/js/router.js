import Vue from "vue";
import VueRouter from "vue-router";

import TalkEventUnit from "./components/organisms/TalkEventUnit.vue";

import Opening from "./components/events/Opening.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "main",
        components: {
            gameUnit: TalkEventUnit
        }
    },
    {
        path: "opening",
        name: "opening",
        components: {
            gameUnit: Opening
        }
    }
];

const router = new VueRouter({
    // mode: "history",
    routes
});

export default router;
