import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "About",
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
    // redirect:"ele"
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/form",
    name: "form",
    component: () => import("../views/form.vue"),
  },
  {
    path: "/ele",
    name: "ele",
    component: () => import("../components/Form/index.vue"),
  },
  // {
  //   path: "/",
  //   name: "ele",
  //   component: () => () => import("../components/Form/index.vue"),
  // },
  // {
  //   path: "/about",
  //   name: "About",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // },
];

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  }
});

router.onError((error) => {
  const pattern = /Loading chunk (\d)+ failed/g;
  const isChunkLoadFailed = error.message.match(pattern);
  const targetPath = router.history.pending.fullPath;
  if (isChunkLoadFailed) {
    router.replace(targetPath);
  }
});

export default router;
