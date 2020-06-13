import Vue from "vue";
import VueRouter from "vue-router";
import App from "./views/App";
import Home from "./views/Home";
import "./registerServiceWorker";
require("./bootstrap");
import "../sass/app.scss";
Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        }
    ]
});

const app = new Vue({
    el: "#app",
    components: { App },
    router
});

export default app;
