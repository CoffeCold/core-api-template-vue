import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/home/Home.vue";
import Privacy from "./components/home/Privacy.vue";

import MainContainer from "./components/mainitems/Container.vue";
import MainCreate from "./components/mainitems/Create.vue";
import MainDelete from "./components/mainitems/Delete.vue";
import MainEdit from "./components/mainitems/Edit.vue";
import MainDetails from "./components/mainitems/Details.vue";
import MainList from "./components/mainitems/List.vue";

import SubContainer from "./components/subitems/Container.vue";
import SubCreate from "./components/subitems/Create.vue";
import SubDelete from "./components/subitems/Delete.vue";
import SubEdit from "./components/subitems/Edit.vue";
import SubDetails from "./components/subitems/Details.vue";
import SubList from "./components/subitems/List.vue";

Vue.use(VueRouter);

export default [
  { path: "/", component: Home },
  { path: "/home", component: Home },
  { path: "/privacy", component: Privacy },
  {
    path: "/mainitems",
    component: MainContainer,
    //name: "Mainitems",

    children: [
      {
        path: "",
        component: MainList
      },
      {
        // /mainitems
        path: "list",
        component: MainList
      },
      {
        // /mainitems/create
        path: "create",
        component: MainCreate,
        name: "maincreate"
      },
      {
        path: "edit/:id",
        component: MainEdit,
        name: "mainedit",
        props: true
      },
      {
        path: "delete/:id",
        component: MainDelete,
        name: "maindelete",
        props: true
      },
      {
        // /mainitems/details/123
        path: "details/:id",
        component: MainDetails,
        name: "maindetails",
        props: true
      }
    ]
  },
  {
    path: "/subitems",
    component: SubContainer,
    //name: "Subitems",

    children: [
      {
        path: "",
        component: SubList
      },
      {
        // /subitems
        path: "list",
        component: SubList
      },

      {
        path: "edit/:id",
        component: SubEdit,
        name: "subedit",
        props: true
      },

      {
        // /subitems/create
        path: "create/:mainid",
        component: SubCreate,
        name: "subcreate",
        props: true
      },
      {
        path: "delete/:id",
        component: SubDelete,
        name: "subdelete",
        props: true
      },
      {
        // /subitems/details/aa
        path: "details/:id",
        component: SubDetails,
        name: "subdetails",
        props: true
      }
    ]
  }
];
