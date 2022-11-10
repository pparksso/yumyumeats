import { createRouter, createWebHistory } from "vue-router";
import MainView from "../view/MainView.vue";
import Layout from "../view/Layout.vue";
import SearchView from "../view/SearchView.vue";
import RecommendView from "../view/RecommendView.vue";

const routes = [
  {
    path: "/",
    name: "layout",
    component: Layout,
    children: [
      { path: "/", component: MainView },
      { path: "search", component: SearchView },
      { path: "recommend", component: RecommendView },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
