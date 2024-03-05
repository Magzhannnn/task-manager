import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { ITask } from "@/types/task";

export const useTaskStore = defineStore("counter", () => {
  const tasks = ref<ITask[]>(JSON.parse(localStorage.getItem("tasks") || "[]"));

  const newTasks = computed(() =>
    tasks.value.filter((task) => task.status === "new")
  );

  const completedTasks = computed(() =>
    tasks.value.filter((task) => task.status === "completed")
  );

  const addTask = (title: string) => {
    const id = new Date();
    tasks.value.push({ id: id.getTime(), status: "new", title });
    saveTasks();
  };

  const completeTask = (id: number) => {
    tasks.value = tasks.value.map((task) =>
      task.id === id ? { ...task, status: "completed" } : task
    );
    saveTasks();
  };

  const unCompleteTask = (id: number) => {
    tasks.value = tasks.value.map((task) =>
      task.id === id ? { ...task, status: "new" } : task
    );
    saveTasks();
  };

  const removeTask = (id: number) => {
    tasks.value = tasks.value.filter((task) => task.id !== id);
    saveTasks();
  };

  const saveChangeTask = (title: string, id: number) => {
    tasks.value = tasks.value.map((task) =>
      task.id === id ? { ...task, title } : task
    );
    saveTasks();
  };

  const saveTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks.value));
  };

  return {
    tasks,
    newTasks,
    completedTasks,
    addTask,
    completeTask,
    unCompleteTask,
    removeTask,
    saveChangeTask,
  };
});
