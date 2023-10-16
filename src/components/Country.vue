<template>
  <v-card
    :to="{ name: 'by-country', params: { name: country.name } }"
    class="bg-primary rounded-lg"
    variant="text"
    elevation="3"
  >
    <v-img
      cover
      :height="display.mdAndUp ? 250 : 200"
      :src="country.flags.png"
    ></v-img>
    <v-card-item class="pb-16 pl-8 pt-6">
      <v-card-title class="mb-3">{{ country.name }}</v-card-title>

      <v-card-item class="pa-0">
        <template v-slot:prepend>
          <v-card-title>Population : </v-card-title>
        </template>
        <v-card-title class="text-darkGray">{{
          country.population
        }}</v-card-title>
      </v-card-item>

      <v-card-item class="pa-0">
        <template v-slot:prepend>
          <v-card-title>Region : </v-card-title>
        </template>
        <v-card-title class="text-darkGray">{{ country.region }}</v-card-title>
      </v-card-item>
      <v-card-item class="pa-0">
        <template v-slot:prepend>
          <v-card-title>Capital : </v-card-title>
        </template>
        <v-card-title class="text-darkGray">{{ country.capital }}</v-card-title>
      </v-card-item>
    </v-card-item>
  </v-card>
</template>

<script>
import { useDisplay } from "vuetify/lib/framework.mjs";
export default {
  name: "Country",
  data() {
    return {
      display: useDisplay(),
    };
  },
  props: {
    country: Object,
  },
};
</script>
<style scoped>
.elevation-3 {
  box-shadow: 1px 1px 20px 1px #00000024 !important;
}
</style>
