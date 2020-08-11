import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("../views/Settings.vue"),
  },
  {
    path: "/aco",
    name: "Aco",
    component: () => import("../views/Aco.vue"),
  },
  {
    path: "/autofill",
    name: "Autofill",
    component: () => import("../views/Autofill.vue"),
  },
  {
    path: "/autofill/profiles",
    name: "Profiles",
    component: () => import("../views/Profiles.vue"),
  },
  {
    path: "/autofill/create",
    name: "CreateProfile",
    component: () => import("../views/CreateProfile.vue"),
  },
  {
    path: "/sitescripts",
    name: "SiteScripts",
    component: () => import("../views/SiteScripts.vue"),
  },
  {
    path: "/sitescripts/groups",
    name: "SiteScriptsGroups",
    component: () => import("../views/SiteScriptsGroups.vue"),
  },
  {
    path: "/sitescripts/bots",
    name: "SiteScriptsBots",
    component: () => import("../views/SiteScriptsBots.vue"),
  },
  {
    path: "/sitescripts/misc",
    name: "SiteScriptsMisc",
    component: () => import("../views/SiteScriptsMisc.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
