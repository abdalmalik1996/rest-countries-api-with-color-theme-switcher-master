<template>
  <v-row class="bg-background">
    <v-col
      cols="12"
      md="4"
      lg="3"
      sm="6"
      v-for="(country, index) in LoadCountries"
      :key="country.name"
      class="ma-auto"
    >
      <Country :country="country" />
    </v-col>
    <div
      v-if="CountriesView.length !== countries.length"
      class="text-center pa-10 w-100"
    >
      <v-progress-circular indeterminate color="darkGray"></v-progress-circular>
    </div>
  </v-row>
</template>

<script>
import { mapState } from "pinia";
import Country from "./Country.vue";
import useAppStore from "@/store/app";
export default {
  name: "Countries",
  data() {
    return {
      CountriesView: [],
      maxPerPage: 8,
      perPage: 0,
    };
  },
  created() {
    // this.getCountrys();
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const { scrollTop, offsetHeight } = document.documentElement;
      const { innerHeight } = window;
      const bottomOfWindow = Math.round(scrollTop) + innerHeight > offsetHeight;
      if (bottomOfWindow) {
        this.maxPerPage += 8;
      }
    },
  },
  computed: {
    ...mapState(useAppStore, ["countries"]),
    LoadCountries() {
      this.perPage = 0;
      this.CountriesView = [];
      this.countries.forEach((country) => {
        if (this.perPage < this.maxPerPage) {
          this.CountriesView.push({
            ...country,
          });
          this.perPage++;
        }
      });

      return this.CountriesView;
    },
  },
  components: {
    Country,
  },
};
</script>
