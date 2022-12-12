import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../store/auth";

const routes = [
  {
    app: "",
    path: "/",
    redirect: "/login",
  },
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
  const authStore = useAuthStore();
  const isAuth = authStore.isAuth;

  const authNotRequired = ["login"];
  const authRequired = ["home"];

  if (authNotRequired.indexOf(to.name) > -1 && isAuth) {
    next({ name: "home" });
  }

  if (authRequired.indexOf(to.name) > -1) {
    if (isAuth) {
      next();
    } else {
      next({ name: "login" });
    }
  } else {
    next();
  }
});

export default router;
