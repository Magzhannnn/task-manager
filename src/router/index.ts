import { createRouter, createWebHistory } from "vue-router";
import Task from "@/pages/Task.vue";
import ChangeTask from "@/components/ChangeTask.vue";

const routes = [
  { path: "/", name: "tasks", component: Task },
  { path: "/change-task/:id", name: "changeTable", component: ChangeTask },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
