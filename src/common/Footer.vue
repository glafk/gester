<template>
  <v-footer color="red" class="white--text" app>
    <span>Team Kruchmata</span>
    <v-spacer></v-spacer>
    <span>&copy; {{date}}</span>
  </v-footer>
</template>


<script>
export default {
  name: 'Footer',
  computed: {
    date() {
      return (new Date()).getFullYear()
    }
  }
}
</script>


<style scoped>


</style>
