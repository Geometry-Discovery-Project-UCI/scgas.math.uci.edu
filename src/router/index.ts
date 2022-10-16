import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import RegistrationView from "@/views/RegistrationView.vue";
import ParticipantsView from "@/views/ParticipantsView.vue";
import ProgramView from "@/views/ProgramView.vue";
import AccommodationView from "@/views/AccommodationView.vue";
import TransportationView from "@/views/TransportationView.vue";
import PastSeminarsView from "@/views/PastSeminarsView.vue";
import FutureSeminarsView from "@/views/FutureSeminarsView.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    name: "registration",
    path: "/registration",
    component: RegistrationView,
  },
  {
    name: "participants",
    path: "/participants",
    component: ParticipantsView,
  },
  {
    name: "program",
    path: "/program",
    component: ProgramView,
  },
  {
    name: "accommodation",
    path: "/accommodation",
    component: AccommodationView,
  },
  {
    name: "transportation",
    path: "/transportation",
    component: TransportationView,
  },
  {
    name: "past seminars",
    path: "/past-seminars",
    component: PastSeminarsView,
  },
  {
    name: "future seminars",
    path: "/future-seminars",
    component: FutureSeminarsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
