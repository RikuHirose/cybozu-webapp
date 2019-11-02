<template>
  <div>
    <h2>Todos</h2>
  </div>
</template>

<script>

export default {

  created() {
    this.fetch()
  },
  computed: {
    companies () {
      return this.$store.state.companies
    }
  },
  methods: {
    fetch () {
      this.$store.dispatch('fetchCompanies')
    },
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>