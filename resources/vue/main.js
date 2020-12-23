import Vue from "vue";
import VueRouter from "vue-router";

import router from "./router";

import "./assets/styles/index.css";

Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
    router,
}).$mount("#app");
