import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import middleware from "@grafikri/vue-middleware";

import routes from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    base: "/",
    routes
});

router.beforeEach(middleware({ store }));

export default router;
