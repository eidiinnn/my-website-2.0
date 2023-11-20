<template>
  <div class="d-flex flex-column justify-center align-center">
    <v-icon icon="bedtime" size="50" />
    <div class="text-h6">{{ $t("helloWorld") }}</div>
    <v-btn
      color="primary"
      @click="manager.languageSwitch(manager.language === 'en' ? 'ptBr' : 'en')"
    >
      language change
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { managerStore } from "../store";
const manager = managerStore();
</script>
