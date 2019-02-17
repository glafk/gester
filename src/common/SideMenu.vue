<template>
  <v-navigation-drawer
    v-model="toggle.drawer"
    fixed
    app
  >
    <v-list dense>
      <v-list-tile @click.stop="toggle.drawer = !toggle.drawer">
        <v-list-tile-content></v-list-tile-content>
        <v-list-tile-action>
          <v-icon>exit_to_app</v-icon>
        </v-list-tile-action>
      </v-list-tile>

      <v-divider></v-divider>

      <v-list-tile>
        <v-list-tile-content>Switch theme</v-list-tile-content>
        <v-list-tile-action>
          <v-switch
            @change="changeTheme"
            label=""
            v-model="theme.isDark"
          ></v-switch>
        </v-list-tile-action>
      </v-list-tile>

      <v-divider></v-divider>

      <v-list-tile v-for="(nav, index) in navs">

          <v-list-tile-action>
            <v-icon>{{ nav.icon }}</v-icon>
          </v-list-tile-action>

          <router-link tag="v-list-tile-content" :to="nav.to" exact>{{nav.title}}</router-link>

      </v-list-tile>
    </v-list>



  </v-navigation-drawer>
</template>


<script>
import EventBus from '@/utils/EventBus'
export default {
  name: 'SideMenu',
  props: {
    dark: Boolean
  },
  inject: ['toggle', 'theme'],
  data() {
    return {
      navs: [
        {to: '/devices', title: 'Devices', icon: 'settings_remote'},
        {to: '/geastures', title: 'Geastures', icon: 'pan_tool'},
      ]
    }
  },
  methods: {
    changeTheme(event) {
      localStorage.setItem('dark', event ? event : '')
      EventBus.$emit('theme-changes', event)
    }
  }
}
</script>

<style scoped>

</style>
