import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// import BaseButton từ thư mục bạn lưu
import BaseButton from './common/BaseButton.vue'

const app = createApp(App)

// đăng ký global component
app.component('BaseButton', BaseButton)

app.use(router)
app.use(createPinia())
app.mount('#app')
