/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  routes: [
    // route default to layout and childrens to pages
    {
      path: "/",
      component: () => import("@/components/Layout.vue"),
      children: [
        {
          path: "",
          name: "Home",
          component: () => import("@/pages/Home.vue"),
        },
        {
          path: "/edit",
          name: "Edit",
          component: () => import("@/pages/Edit.vue"),
        },
      ],
    },
  ],
  history: createWebHistory(import.meta.env.BASE_URL),
});

export default router;
