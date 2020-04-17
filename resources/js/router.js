import Vue from "vue";
import VueRouter from "vue-router";

import TalkEventUnit from "./components/organisms/TalkEventUnit.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "main",
        components: {
            TalkEventUnit: TalkEventUnit
        }
    }
];

const router = new VueRouter({
    // mode: "history",
    routes
});

export default router;
