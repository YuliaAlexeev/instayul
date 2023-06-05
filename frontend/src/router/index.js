import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/explore",
    component: () => import("../views/explore-page.vue"),
  },
  {
    path: "/",
    component: () => import("../views/instayul-app.vue"),
  },
  {
    path: "/:userName",
    component: () => import("../views/user-details.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
