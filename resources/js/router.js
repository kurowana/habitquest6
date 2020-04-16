import Vue from "vue";
import VueRouter from "vue-router";

import GameUnit from "./components/organisms/GameUnit.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "main",
        components: {
            gameUnit: GameUnit
        }
    }
];

const router = new VueRouter({
    // mode: "history",
    routes
});

export default router;
