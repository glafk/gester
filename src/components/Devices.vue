<template>
  <v-flex>
    <v-card>
  <v-toolbar color="red" dark>
    <v-toolbar-title>Available Devices</v-toolbar-title>

    <v-spacer></v-spacer>
  </v-toolbar>

    <v-list two-line subheader>

      <v-list-tile
        v-for="item in items"
        :key="item.deviceName"
        avatar
        @click=""
      >
        <v-list-tile-avatar>
          <v-avatar color="red">
            <span class="white--text">{{item.deviceName[0]}}</span>
          </v-avatar>
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.deviceName }}</v-list-tile-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-btn round :color="item.connected ? 'danger' : 'success'"  @click="item.connected = !item.connected">
            {{item.connected ? 'Disconnect' : 'Connect'}}
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>

    </v-list>
  </v-card>
  </v-flex>
</template>

<script>
export default {
  name: 'Devices',
  mounted(){

  },
  data () {
    return {
      items: [
        { deviceName: 'Samsung TV'},
        { deviceName: 'JBL Charger 3'},
      ]
    }
  },
  computed: {
    computedItems() {
      return this.items.map(item => Object.assign(item, {connected: false}))
    }
  }
}

</script>
