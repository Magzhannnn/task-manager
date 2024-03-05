<script setup lang="ts">
import router from "@/router";
import { useTaskStore } from "@/stores/tasks";

const taskStore = useTaskStore();

const removeTask = (id: number) => {
  taskStore.removeTask(id);
};

const completeTask = (id: number) => {
  taskStore.completeTask(id);
};

const clickOnTask = (id: number) => {
  router.push({ name: "changeTable", params: { id } });
};
</script>

<template>
  <div>
    <h1 class="text-2xl">New tasks: {{ taskStore.newTasks.length > 0 ? taskStore.newTasks.length : "Empty" }} </h1>
    <ul class="list-none">
      <li
        v-for="(task, index) in taskStore.newTasks"
        :key="index"
        class="flex items-center mb-2 gap-3 max-w-[500px] cursor-pointer"
        @click="clickOnTask(task.id)"
      >
        <span class="flex-1 text-xl mt-1">{{
          `${index + 1}) ${task.title}`
        }}</span>
        <button
          @click.stop="completeTask(task.id)"
          class="bg-green-500 text-white py-1 px-2 rounded"
        >
          Complete
        </button>
        <button
          @click.stop="removeTask(task.id)"
          class="bg-red-500 text-white py-1 px-2 rounded"
        >
          Remove
        </button>
      </li>
    </ul>
  </div>
</template>
