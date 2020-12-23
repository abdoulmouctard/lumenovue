import VueRouter from "vue-router";

import Index from "../pages/Index.vue";

const router = new VueRouter({
    mode: "history",
    base: "/",
    routes: [{ path: "/", component: Index }]
});

export default router;
