import { createRouter, createWebHistory } from 'vue-router';
import AboutComp from '@/components/AboutComp.vue';
import SkillsComp from '@/components/SkillsComp.vue';
import ProjectsComp from '@/components/ProjectsComp.vue';
import ContactComp from '@/components/ContactComp.vue';

const routes = [
   {
    path: '/about',
    name: 'About',
    component: AboutComp,
  },
  {
    path: '/skills',
    name: 'Skills',
    component: SkillsComp,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsComp,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactComp,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
