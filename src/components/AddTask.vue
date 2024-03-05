<script setup lang="ts">
import { useTaskStore } from "@/stores/tasks";
import { ref } from "vue";

const taskStore = useTaskStore();
const newTask = ref("");

const addTask = () => {
  if (newTask.value.trim() !== "") {
    taskStore.addTask(newTask.value.trim());
    newTask.value = "";
  }
};
</script>

<template>
  <h1 class="text-2xl font-bold mb-4">Task List</h1>
  <form @submit.prevent="addTask" class="mb-4">
    <input
      type="text"
      v-model="newTask"
      placeholder="Enter task..."
      class="p-2 border rounded mr-2 text-black"
    />
    <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded">
      Add Task
    </button>
  </form>
</template>
