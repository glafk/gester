import Vue from 'vue'
import Router from 'vue-router'

import AvailableGeastures from '@/components/AvailableGeastures'
import Devices from '@/components/Devices'
import Splashscreen from '@/components/Splashscreen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: Splashscreen.name,
      component: Splashscreen
    },
    {
      path: '/devices',
      name: Devices.name,
      component: Devices
    },
    {
      path: '/geastures',
      name: AvailableGeastures.name,
      component: AvailableGeastures
    }
  ]
})
