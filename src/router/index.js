import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "login",
    path: "/login",
    component: () => import("../views/Login.vue"),
  },
  {
    name: "home",
    path: "/home",
    component: () => import("../views/Home.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
