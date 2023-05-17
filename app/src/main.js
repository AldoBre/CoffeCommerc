import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/css/index.css'
import './assets/tailwind.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import iconsPlugin from './plugins/iconsPlugin'




createApp(App)
.use(store)
.use(router)
.use(iconsPlugin)
.mount('#app')
