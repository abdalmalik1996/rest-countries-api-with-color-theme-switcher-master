// Composables
import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("@/views/Home.vue");
const CountryDetails = () => import("@/views/CountryDetails.vue");
const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "/",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Home,
      },
      {
        path: "/by-country/:name?",
        name: "by-country",
        component: CountryDetails,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
