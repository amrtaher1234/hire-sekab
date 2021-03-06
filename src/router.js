import Vue from "vue";
import Router from "vue-router";
import Landing from "./views/Landing.vue";
Vue.use(Router);

export default new Router({
  routes: [{
      path: "/",
      name: "landing",
      component: Landing
    },
    {
      path: "/work",
      name: "work",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Work.vue")
    },
    {
      path: '/landing',
      name: 'landing',
      component: () =>
        import("./views/Landing.vue")
    }
  ]
});