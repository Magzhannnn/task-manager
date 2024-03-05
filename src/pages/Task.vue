<script setup lang="ts">
import AddTask from "@/components/AddTask.vue";
import TaskListWrap from "@/components/TaskListWrap.vue";
</script>

<template>
  <div class="task-list-container">
    <AddTask />
    <TaskListWrap />
  </div>
</template>

<style scoped>
.task-list-container {
  max-width: 900px;
  margin: 50px;
}
</style>
