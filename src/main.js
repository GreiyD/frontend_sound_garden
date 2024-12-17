import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Toast, { POSITION } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

createApp(App)
    .use(router)
    .use(Toast, {
        position: POSITION.TOP_RIGHT,
        timeout: 5000,
        closeOnClick: true,
    })
    .mount('#app');