import { defineStore } from "pinia";
import * as managerTypes from "../types/manager";
import i18n from "../plugins/i18n";

export const managerStore = defineStore("manager", {
  state: () => {
    const state: managerTypes.state = { theme: "dark", language: "ptBr" };
    return state;
  },
  actions: {
    setup() {
      i18n.global.locale = this.language;
    },

    themeSwitch() {
      this.theme = this.theme === "dark" ? "light" : "dark";
    },

    languageSwitch(lang: managerTypes.languages) {
      this.language = lang;
      i18n.global.locale = lang;
    },
  },
  persist: true,
});
