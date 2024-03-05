<script setup lang="ts">
import CompletedTaskList from "./CompletedTaskList.vue";
import NewTaskList from "./NewTaskList.vue";
</script>

<template>
  <div class="flex flex-col gap-[30px]">
    <NewTaskList />
    <CompletedTaskList />
  </div>
</template>
