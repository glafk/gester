<template>
  <v-content center>

    <div class="text-xs-center">
      <v-progress-circular
        :rotate="360"
        :size="100"
        :width="15"
        :value="value"
        color="red"
      >
        {{ value }}
      </v-progress-circular>
      <v-avatar
        size="avatarSize"
        class="red"
      >
        <!-- <v-img class="justify-center" max-width="300px" src="/static/images/logo.png" alt="logo" /> -->
      </v-avatar>

    </div>
  </v-content>
</template>

<script>
import EventBus from '@/utils/EventBus'

export default {
  name: 'Splashscreen',
  data () {
    return {
      interval: {},
      value: 0
    }
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },
  mounted () {
    this.interval = setInterval(() => {
      if (this.value >= 100) {
        this.$router.push({path: '/devices'})
        EventBus.$emit('loader-ready')
        return (this.value = 0)
      }
      this.value += 20
    }, 1000)
  }
}
</script>
