<script setup lang="ts">
import { useTaskStore } from "@/stores/tasks";

const taskStore = useTaskStore();

const removeTask = (id: number) => {
  taskStore.removeTask(id);
};

const unCompleteTask = (id: number) => {
  taskStore.unCompleteTask(id);
};
</script>

<template>
  <div>
    <h1 class="text-2xl">
      Completed tasks: {{ taskStore.completedTasks.length > 0 ? taskStore.completedTasks.length : "Empty" }}
    </h1>
    <ul class="list-none">
      <li
        v-for="(task, index) in taskStore.completedTasks"
        :key="index"
        class="flex items-center mb-2 gap-3 max-w-[500px]"
      >
        <span class="flex-1 text-xl mt-1">{{
          `${index + 1}) ${task.title}`
        }}</span>
        <button
          @click.stop="unCompleteTask(task.id)"
          class="bg-orange-500 text-white py-1 px-2 rounded"
        >
          Uncomplete
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
