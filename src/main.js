import Vue from "vue";
import App from "./App.vue";
import Routes from "./router";
import VueRouter from "vue-router";

const router = new VueRouter({
  routes: Routes
});

Vue.config.productionTip = false;

new Vue({
  router: router,
  render: h => h(App)
}).$mount("#app");
