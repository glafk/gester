<template>
  <div>
    <v-navigation-drawer
      v-model="toggle.right"
      fixed
      left
      clipped
      app
    />
    <v-toolbar
      color="red"
      dark
      fixed
      app
      clipped-right
    >
      <v-toolbar-side-icon @click.stop="toggle.drawer = !toggle.drawer" v-show="loaded"></v-toolbar-side-icon>
      <v-toolbar-title>Smart Bracelet Control</v-toolbar-title>
    </v-toolbar>
  </div>
</template>


<script>
import EventBus from '@/utils/EventBus'

export default {
  name: 'Header',
  inject: ['toggle'],
  mounted(){
    EventBus.$on('loader-ready', () => {
      this.loaded = true
    })
  },
  data() {
    return {
      loaded: !false
    }
  }
}

</script>
