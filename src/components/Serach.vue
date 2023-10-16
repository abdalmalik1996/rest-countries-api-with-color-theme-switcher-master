<template>
  <v-card variant="test" class="py-10 bg-background">
    <v-row class="pa-0">
      <!-- Serch -->
      <v-col  cols="12" md="4">
        <v-text-field
          :loading="loading"
          density="comfortable"
          variant="solo"
          label="Serch for a country..."
          prepend-inner-icon="mdi-magnify"
          single-line
          v-model="searchName"
          @update:model-value="serchCountry(searchName)"
        ></v-text-field>
      </v-col>
      <VSpacer />
      <!-- Fliter -->
      <v-col cols="8" sm="6" md="4" >
        <v-select
          v-model="select"
          :items="items"
          item-title="state"
          item-value="abbr"
          hide-selected
          variant="solo"
          single-line
          density="comfortable"
          :menu-props="{ offset: '5px' }"
          @update:model-value="filterCountries(select)"
        ></v-select>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapActions, mapWritableState } from "pinia";
import useAppStore from "@/store/app";

export default {
  name: "Search",
  data: () => ({
    loaded: false,
    loading: false,
    searchName: "",
    select: { state: "Filter by Regolar", abbr: "" },
    items: [
      { state: "Africa", abbr: "Africa" },
      { state: "America", abbr: "Americas" },
      { state: "Asia", abbr: "Asia" },
      { state: "Europe", abbr: "Europe" },
      { state: "Oceania", abbr: "Oceania" },
    ],
  }),

  methods: {
    ...mapActions(useAppStore, ["serchCountry", "filterCountries"]),
    onClick() {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        this.loaded = true;
      }, 2000);
    },
  },
  computed: {
    ...mapWritableState(useAppStore, ["filter"]),
  },
};
</script>
<style >

.v-field--variant-solo{
  box-shadow: none !important;
}
</style>
