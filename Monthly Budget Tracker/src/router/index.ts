import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from "@/views/DashboardView.vue";
import TransactionsView from "@/views/TransactionsView.vue";
import AddTransactionView from "@/views/AddTransactionView.vue";
import CategoriesView from "@/views/CategoriesView.vue";
import SettingsView from "@/views/SettingsView.vue";
import NotFound from "@/views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView,
    },
    {
      path: '/transactions',
      name: 'transactions',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      
      // Two options bow to import components
      // component: () => import('../views/AboutView.vue'),
      component: TransactionsView,
    },
    {
      path: '/transactions/new',
      name: 'NewTransaction',
      component: AddTransactionView,
    },
    {
      path: '/categories',
      name: 'categories',
      component: CategoriesView,
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound,
    }
  ],
})

export default router
