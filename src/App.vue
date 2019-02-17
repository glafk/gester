<template>
  <v-app id="inspire" :dark="isDark">
     <Header />

     <Side-menu />

     <v-content>
       <v-container fluid fill-height>
         <router-view :key="$route.path"/>
       </v-container>
     </v-content>

     <Footer />

  </v-app>
</template>

<style scoped>

</style>

<script>
import SideMenu from '@/common/SideMenu'
import Header from '@/common/Header'
import Footer from '@/common/Footer'
import EventBus from '@/utils/EventBus'

export default {
  name: 'App',
  components: {
    SideMenu,
    Header,
    Footer
  },
  provide() {
    return {
      toggle: this.toggle,
      theme: {isDark: this.isDark}
    }
  },
  mounted(){
    EventBus.$on('theme-change', (status) => {
      this.isDark = status
    })
  },
  data(){
    return {
      toggle: {
        drawer: false,
        right: false
      },
      theme: {
        isDark: localStorage.getItem('dark')
      }
    }
  },
  computed: {
    isDark:{
      get(){
        return Boolean(localStorage.getItem('dark'))
      },
      set(val){
        this.theme.isDark = val
      }
    }
  },
  watch: {

  }
}
</script>
