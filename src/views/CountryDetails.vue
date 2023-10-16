<template>
  <v-sheet class="pt-15 bg-background">
    <v-btn
      class="mb-10 text-body-2 bg-primary"
      elevation="5"
      variant="plain"
      prepend-icon=" mdi-arrow-left"
      width="120"
      :to="{ name: 'Home' }"
      >Back</v-btn
    >

    <v-row v-if="countryDe.flags" class="justify-space-between">
      <v-col cols="12" md="6">
        <v-img
          :height="display.mdAndUp ? 310 : auto"
          :width="580"
          cover
          elevation="12"
          :src="countryDe.flags.svg"
        >
        </v-img>
      </v-col>
      <v-col cols="12" md="6" class="d-flex align-center">
        <v-list width="100%" class="pa-1 pa-md-3 bg-background">
          <v-list-item
            ><v-list-item-title class="text-h4 country_name font-weight-bold">{{
              countryDe.name
            }}</v-list-item-title>
          </v-list-item>
          <v-row class="ma-0">
            <v-col class="pa-0" cols="12" md="5">
              <!-- Native Name -->
              <v-list-item>
                <template v-slot:prepend>
                  <v-list-item-title class="me-2"
                    >Native Name:</v-list-item-title
                  >
                </template>
                <v-list-item-title class="text-darkGray">{{
                  countryDe.nativeName
                }}</v-list-item-title>
              </v-list-item>
              <!-- Population -->
              <v-list-item>
                <template v-slot:prepend>
                  <v-list-item-title class="me-2"
                    >Population:</v-list-item-title
                  >
                </template>
                <v-list-item-title class="text-darkGray">{{
                  countryDe.population
                }}</v-list-item-title>
              </v-list-item>
              <!-- Region -->
              <v-list-item>
                <template v-slot:prepend>
                  <v-list-item-title class="me-2">Region:</v-list-item-title>
                </template>
                <v-list-item-title class="text-darkGray">{{
                  countryDe.region
                }}</v-list-item-title>
              </v-list-item>
              <!-- Sub Region -->
              <v-list-item>
                <template v-slot:prepend>
                  <v-list-item-title class="me-2"
                    >Sub Region:</v-list-item-title
                  >
                </template>
                <v-list-item-title class="text-darkGray">{{
                  countryDe.subregion
                }}</v-list-item-title>
              </v-list-item>
              <!-- Capital -->
              <v-list-item>
                <template v-slot:prepend>
                  <v-list-item-title class="me-2">Capital:</v-list-item-title>
                </template>
                <v-list-item-title class="text-darkGray">{{
                  countryDe.capital
                }}</v-list-item-title>
              </v-list-item>
            </v-col>
            <v-col class="pa-0" cols="12" md="7">
              <!-- Top Leavel Domain -->
              <v-list-item>
                <template v-slot:prepend>
                  <v-list-item-title class="me-2"
                    >Top Leavel Domain:</v-list-item-title
                  >
                </template>
                <v-list-item-title class="text-darkGray">{{
                  countryDe.topLevelDomain.join(", ")
                }}</v-list-item-title>
              </v-list-item>
              <!-- currencies -->
              <v-list-item>
                <template v-slot:prepend>
                  <v-list-item-title class="me-2"
                    >Currencies:</v-list-item-title
                  >
                </template>
                <v-list-item-title class="text-darkGray">{{
                  countryDe.currencies[0].code
                }}</v-list-item-title>
              </v-list-item>
              <!-- languages -->
              <v-list-item>
                <template v-slot:prepend>
                  <v-list-item-title class="me-2">Languages:</v-list-item-title>
                </template>
                <v-list-item-title class="text-darkGray flex-wrap d-flex">
                  <template
                    v-for="(language, index) in countryDe.languages"
                    :key="language"
                  >
                    <span>
                      {{ language.name }}
                      <span v-if="index !== countryDe.languages.length - 1"
                        >,
                      </span>
                    </span>
                  </template>
                </v-list-item-title>
              </v-list-item>
            </v-col>
          </v-row>
          <v-list-item class="d-block d-md-flex">
            <template v-slot:prepend> Border Countries: </template>
            <v-card-actions
              class="ml-0 ml-md-5 flex-wrap"
              v-if="borderCountries"
            >
              <v-btn
                v-for="(border, index) in borderCountries"
                :key="index"
                variant="outlined"
                class="border text-body-2 text-darkGray px-1 px-md-5 my-1"
                elevation="2"
                :to="{ name: 'by-country', params: { name: border.name } }"
                >{{ border.name }}</v-btn
              >
            </v-card-actions>

            <v-list-item-title
              class="ml-5 text-caption text-darkGray"
              v-if="!borderCountries"
              >No Borders....</v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
import { mapActions, mapState } from "pinia";
import useAppStore from "@/store/app";
import { useDisplay } from "vuetify/lib/framework.mjs";
export default {
  name: "CountryDetails",
  data() {
    return {
      display: useDisplay(),
    };
  },
  methods: {
    ...mapActions(useAppStore, ["countryDetailsHandler"]),
  },
  computed: {
    ...mapState(useAppStore, ["countryDe", "borderCountries"]),
  },
  mounted() {
    console.log(this.$route.params.name);
    this.countryDetailsHandler(this.$route.params.name);
  },
  updated() {
    this.countryDetailsHandler(this.$route.params.name);
  },
};
</script>
<style scoped>
.country_name {
  line-height: 2.5;
}
.v-list-item--density-default.v-list-item--one-line {
  min-height: 0 !important;
}
</style>
