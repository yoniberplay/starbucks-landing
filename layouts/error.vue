<template>
  <v-row justify="center" align="center" style="height:100vh;">
    <v-col cols="12" sm="6" md="6" justify="center" align="center">
      <v-icon size="60" color="primary">mdi-emoticon-sad-outline</v-icon>
      <h3 class="mb-8 mt-4">Ups ha ocurrido un error...</h3>
      <span v-if="error.statusCode === 404">Parece que la página que buscas no existe.</span>
      <span v-else>{{error.message}}: Por favor, recarga la página e inténtalo nuevamente.</span>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>