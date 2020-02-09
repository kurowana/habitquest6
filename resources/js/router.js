import Vue from "vue";
import VueRouter from "vue-router";

import GameUnit from "./components/units/GameUnit.vue";
import HabitUnit from "./components/units/HabitUnit.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "main",
        components: {
            gameUnit: GameUnit,
            habitUnit: HabitUnit
        }
    }
];

const router = new VueRouter({
    // mode: "history",
    routes
});

export default router;
