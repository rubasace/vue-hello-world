import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/home",
    alias: ["/", "/casa"],
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/hello/:name([a-z]+)",
    name: "Hello",
    component: () =>
      import(/* webpackChunkName: "hello" */ "../views/Hello.vue")
  },
  {
    path: "/hola",
    name: "Hola",
    redirect: "/hello"
  }
];

const router = new VueRouter({
  routes
});

export default router;
