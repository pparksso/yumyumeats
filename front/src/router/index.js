import { createRouter, createWebHistory } from "vue-router";
import MainView from "../view/MainView.vue";
import Layout from "../view/Layout.vue";
import SearchView from "../view/SearchView.vue";
import RecommendView from "../view/RecommendView.vue";
import DetailView from "../view/DetailView.vue";

const routes = [
  {
    path: "/",
    name: "layout",
    component: Layout,
    children: [
      { path: "/", component: MainView },
      { path: "search", component: SearchView },
      { path: "recommend", component: RecommendView },
      { path: "detail/:id", component: DetailView },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
