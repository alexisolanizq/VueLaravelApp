import { createRouter, createWebHistory } from "vue-router";
import authRoutes from "@/router/authRoutes";

const routes = [
  {
    path: "/:pathMatch(.*)",
    component: () => import("@/views/ErrorPage.vue"),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/",
    name: 'home',
    component: () => import("@/views/main/HomePage.vue"),
  },
  authRoutes,
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// router.beforeEach((to, _from, next) => {
//   const needsAuth = to.matched.some((record) => record.meta.requireAuth);
//   if (!needsAuth && isAuth && to.name !== "login")
//     return next({ name: "dashboard" });
//   if (!needsAuth && isAuth && to.name === ("login" || "register"))
//     return next({ name: "dashboard" });
//   if (needsAuth && !isAuth) return next({ name: "login" });
//   else next();
// });

export default router;
