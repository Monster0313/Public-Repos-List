import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'normalize.css'

createApp(App).use(router, axios, VueAxios).mount('#app')
