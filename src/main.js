import { createApp } from 'vue'
import App from './App.vue'
import VueGoodTablePlugin from 'vue-good-table-next';

// import the styles
import 'vue-good-table-next/dist/vue-good-table-next.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/main.css'

const app =createApp(App);

app.use(VueGoodTablePlugin)
app.use(ElementPlus)
app.mount('#app')
