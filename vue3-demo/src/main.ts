import './assets/main.css'
import './assets/public.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import MainContent from './components/mainContent.vue'
import UserHeader from './components/userHeader.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.component('MainContent', MainContent)
app.component('UserHeader', UserHeader)

app.mount('#app')
