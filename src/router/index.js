import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home.vue";

// import About from "../views/about.vue";
// import SignIn from "../views/sign_in.vue";
// import Destination from "../views/destination.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  // {
  //     name: "destination",
  //     path: "/destination",
  //     component: Destination,
  // },
  // {
  //     name: "about",
  //     path: "/about",
  //     component: About,
  // },
  // {
  //     name: "sign-in",
  //     path: "/sign_in",
  //     component: SignIn,
  // },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
