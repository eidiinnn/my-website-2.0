<template>
  <nav class="md-container">
    <v-card width="100%" flat color="transparent">
      <v-card-item>
        <div class="d-flex w-100 justify-space-between">
          <div class="d-flex gap-large align-center">
            <h1 class="text-h6 font-weight-bold text-uppercase text-secondary">
              Eduardo
            </h1>
            <ul class="link-list gap-large ml-5">
              <li
                class="text-body-1 text-uppercase font-weight-bold letter-spaced cursor-pointer"
              >
                {{ $t("experience") }}
              </li>
              <li
                class="text-body-1 text-uppercase font-weight-bold letter-spaced cursor-pointer"
              >
                {{ $t("portfolio") }}
              </li>
              <li
                class="text-body-1 text-uppercase font-weight-bold letter-spaced cursor-pointer"
              >
                {{ $t("contact") }}
              </li>
            </ul>
          </div>

          <ul class="link-list gap">
            <li>
              <v-menu open-on-hover>
                <template #activator="{ props }">
                  <v-btn
                    flat
                    color="background"
                    v-bind="props"
                    icon="mdi-translate"
                  ></v-btn>
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
                      class="text-uppercase"
                      @click="manager.languageSwitch(item.lang)"
                    >
                      {{ item.label }}
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </li>
            <li>
              <v-btn
                flat
                color="background"
                :icon="themeIcon"
                @click="manager.themeSwitch()"
              ></v-btn>
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

  computed: {
    themeIcon() {
      return this.manager.theme == "dark"
        ? "mdi-moon-waning-crescent"
        : "mdi-white-balance-sunny";
    },
  },
};
</script>

<style scoped>
nav {
  margin: 0 auto;
}
.link-list {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  list-style: none;
}
</style>
