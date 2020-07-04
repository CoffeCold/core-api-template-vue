import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/home/Home.vue";
import Privacy from "./components/home/Privacy.vue";

Vue.use(VueRouter);

export default [
  { path: "/", component: Home, name: "Home" },
  { path: "/home", component: Home, name: "Home2" },
  { path: "/privacy", component: Privacy, name: "Privacy" },
  { path: "/mainitems", component: Home, name: "Mainitems" },
  { path: "/subitems", component: Home, name: "Subitems" }
];
