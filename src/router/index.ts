import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    name: "registration",
    path: "/registration",
    component: HomeView,
  },
  {
    name: "participants",
    path: "/participants",
    component: HomeView,
  },
  {
    name: "program",
    path: "/program",
    component: HomeView,
  },
  {
    name: "accommodation",
    path: "/accommodation",
    component: HomeView,
  },
  {
    name: "transportation",
    path: "/transportation",
    component: HomeView,
  },
  {
    name: "past seminars",
    path: "/past-seminars",
    component: HomeView,
  },
  {
    name: "future seminars",
    path: "/future-seminars",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
