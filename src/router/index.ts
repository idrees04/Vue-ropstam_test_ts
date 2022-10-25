import { createRouter, createWebHistory } from 'vue-router';
import userSignUp from '../components/UserSignup.vue';
import userLogin from '../components/UserLogin.vue';
import todo from '../views/ToDoView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'signup',
      component: userSignUp,
    },
    {
      path: '/login',
      name: 'login',
      component: userLogin,
    },
    {
      path: '/todo',
      name: 'todo',
      component: todo,
    },
    // {
    //   path: "/forgot-password",
    //   name: "forgot-password",
    //   component: () => import("../components/ForgotPassword.vue"),
    // },
  ],
});

export default router;
