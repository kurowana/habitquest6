import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./components/pages/base/Home.vue";

import Opening from "./components/pages/events/Opening.vue";

import NormalDungeon from "./components/pages/battles/NormalDungeon.vue";

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
    // イベント関連
    {
        path: "/opening",
        name: "opening",
        components: {
            gameUnit: Opening
        }
    },
    // バトル関連
    {
        path: "/dungeon",
        name: "dungeon",
        components: {
            gameUnit: NormalDungeon
        }
    }
];

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;
