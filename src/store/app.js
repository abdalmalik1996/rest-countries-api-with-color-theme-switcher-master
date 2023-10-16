// Utilities
import { defineStore } from "pinia";
import { ref } from "vue";
import data from "/data.json";
const useAppStore = defineStore("app", {
  state: () => ({
    countries: data,
    countryDe: ref({}),
  }),
  actions: {
    serchCountry(searchName) {
      this.$state.countries = data;
      const filterName = this.$state.countries.filter((country) =>
        country.name.toLowerCase().includes(searchName.toLowerCase())
      );
      this.$state.countries = filterName;
    },
    filterCountries(select) {
      this.$state.countries = data;
      const filterRegion = this.$state.countries.filter(
        (country) => country.region === select
      );
      this.$state.countries = filterRegion;
    },
    countryDetailsHandler(name) {
      const getCountryDetails = data.filter((country) => country.name === name);
      this.$state.countryDe = getCountryDetails[0];
    },
  },
  getters: {
    borderCountries(state) {
      const borders = this.$state.countryDe.borders;
      let bordersName = [];
      if (borders) {
        for (let border of borders) {
          const borderCountry = data.find((country) =>
            country.alpha3Code.toLowerCase().includes(border.toLowerCase())
          );
          if (borderCountry) {
            bordersName.push(borderCountry);
          }
        }

        return bordersName;
      }
      return "";
    },
  },
});

export default useAppStore;
