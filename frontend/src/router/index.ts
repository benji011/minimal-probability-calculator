import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import CombinedWithView from "@/views/CombinedWithView.vue";
import EitherView from "@/views/EitherView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "CombinedWith",
    component: CombinedWithView
  },
  {
    path: "/either",
    name: "Either",
    component: EitherView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
