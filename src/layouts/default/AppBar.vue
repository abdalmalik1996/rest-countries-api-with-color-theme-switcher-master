<template>
  <v-app-bar height="84" flat color="primary" class="px-3 px-md-5 px-lg-15">
    <v-app-bar-title class="text-body-1 text-md-h5 ma-0 font-weight-bold">
      Where in the world?
    </v-app-bar-title>
    <template v-slot:append>
      <v-app-bar-title>
        <v-btn
          @click="toggleTheme"
          class="text-body-2"
          prepend-icon="mdi-weather-night  "
          >Dark Mode</v-btn
        >
      </v-app-bar-title>
    </template>
  </v-app-bar>
</template>

<script>
import { useTheme } from "vuetify";

export default {
  data() {
    return {
      theme: useTheme(),
    };
  },
  methods: {
    toggleTheme() {
      this.theme.global.name = this.theme.global.current.dark
        ? "light"
        : "dark";
    },
  },
};
</script>
