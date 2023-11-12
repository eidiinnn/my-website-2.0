<template>
  <v-app :theme="manager.theme">
    <router-view></router-view>
  </v-app>
</template>

<script setup lang="ts">
import { managerStore } from "./store";
const manager = managerStore();
</script>
