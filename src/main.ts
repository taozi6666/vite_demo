import { createApp } from 'vue'
import App from './App.vue'
// import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import "./main.css";
import "./assets/css/common.css";
import router from "./router/router";

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

// app.use(ElementPlus)
app.use(router)

app.mount('#app')
