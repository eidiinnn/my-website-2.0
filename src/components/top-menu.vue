<template>
  <nav>
    <v-card width="100%" flat color="background">
      <v-card-item>
        <div class="d-flex justify-space-between">
          <div class="d-flex gap align-center">
            <h1 class="text-h6">Eduardo</h1>
          </div>
          <ul class="link-list gap-large">
            <li
              class="text-body-2 text-uppercase font-weight-bold letter-spaced"
            >
              {{ $t("experience") }}
            </li>
            <li
              class="text-body-2 text-uppercase font-weight-bold letter-spaced"
            >
              {{ $t("portfolio") }}
            </li>
            <li
              class="text-body-2 text-uppercase font-weight-bold letter-spaced"
            >
              {{ $t("contact") }}
            </li>

            <li>
              <v-menu open-on-hover>
                <template #activator="{ props }">
                  <v-btn
                    flat
                    color="background"
                    v-bind="props"
                    append-icon="mdi-translate"
                  >
                    lang
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item
                    v-for="(item, index) in languages"
                    :key="index"
                    class="pointer"
                    :base-color="
                      item.lang === manager.language ? 'primary' : undefined
                    "
                  >
                    <v-list-item-title
                      @click="manager.languageSwitch(item.lang)"
                    >
                      {{ item.label }}
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </li>
          </ul>
        </div>
      </v-card-item>
    </v-card>
  </nav>
</template>

<script lang="ts">
import { managerStore } from "../store";
import * as managerTypes from "../types/manager";

type languages = Array<{ label: string; lang: managerTypes.languages }>;

export default {
  setup() {
    return {
      manager: managerStore(),
    };
  },

  data() {
    return {
      languages: [
        { label: "pt-br", lang: "ptBr" },
        { label: "en", lang: "en" },
      ] as languages,
    };
  },
};
</script>

<style scoped>
nav {
  width: 80%;
  margin: 0 auto;
}
.link-list {
  display: flex;
  align-items: center;
  text-decoration: none;
  list-style: none;
}
</style>
