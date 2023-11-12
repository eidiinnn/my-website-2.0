<template>
  <div
    class="d-flex flex-column gap-large justify-center align-center w-100 h-100 bg-background"
  >
    <v-card>
      <v-card-item>
        <ComponentTest />
      </v-card-item>
    </v-card>

    <v-card>
      <v-card-item>
        <div class="text-body">{{ manager.theme }}</div>
        <v-btn color="primary" @click="manager.themeSwitch()"
          >Vuetify Theme switch</v-btn
        >
      </v-card-item>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { managerStore } from "../store";
const manager = managerStore();
</script>
