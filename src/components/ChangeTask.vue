<script setup lang="ts">
import router from "@/router";
import { useTaskStore } from "@/stores/tasks";
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

console.log(route.params.id);

const taskStore = useTaskStore();

const oldTask = ref(
  taskStore.tasks.find((item) => item.id === +route.params.id)?.title
);

const newTask = ref("");

const saveChangeTask = () => {
  taskStore.saveChangeTask(newTask.value, +route.params.id);
  router.push({ name: "tasks" });
};
</script>

<template>
  <div class="m-[30px]">
    <h1 class="text-2xl font-bold mb-4">Change Task</h1>
    <form @submit.prevent="saveChangeTask" class="mb-4">
      <input
        type="text"
        :value="oldTask"
        readonly
        class="p-2 border rounded mr-2 text-black"
      />
      <input
        type="text"
        v-model="newTask"
        placeholder="Enter new task..."
        class="p-2 border rounded mr-2 text-black"
      />
      <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded">
        Save Task
      </button>
    </form>
  </div>
</template>
