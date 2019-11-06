<template>
  <v-container class="grey lighten-5">
      <v-row
        class="mb-6"
        no-gutters
      >
        <template v-for="company in companies">
          <v-col :col="6">
            <v-card
              class="mx-auto"
            >
              <v-card-subtitle class="pb-0">
                <nuxt-link :to="`/company/${company.name}`">{{ company.name }}</nuxt-link>
              </v-card-subtitle>
            </v-card>
          </v-col>
        </template>
      </v-row>
  </v-container>
</template>

<script>
export default {

  created() {
    this.fetch()
  },
  computed: {
    companies () {
      return this.$store.state.company.companies
    }
  },
  methods: {
    fetch () {
      this.$store.dispatch('company/fetchCompanies')
    },
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>
