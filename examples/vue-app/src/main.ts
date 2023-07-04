import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { ComponentLibrary } from "@reputex/vue-widget";

createApp(App).use(ComponentLibrary).mount("#app");