import Vue from "vue";
import VueRouter from "vue-router";

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
