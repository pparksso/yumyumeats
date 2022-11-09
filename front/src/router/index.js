import { createRouter, createWebHistory } from "vue-router";
import MainView from "../view/MainView.vue";
import Layout from "../view/Layout.vue";

const routes = [
  {
    path: "/",
    name: "layout",
    component: Layout,
    children: [{ path: "/", component: MainView }],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
