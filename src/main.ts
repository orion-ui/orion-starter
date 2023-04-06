import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import orion from '@orion.ui/orion'
import '@orion.ui/orion/dist/monkey-patching'

const app = createApp(App)

app.use(router)
app.use(orion, {
  router,
} as Orion.Config)

app.mount('#app')