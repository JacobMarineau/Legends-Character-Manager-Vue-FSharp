import { createApp } from 'vue';
import App from './App.vue'
import './index.css'; // Tailwind CSS
import router from './router';
import { createPinia } from 'pinia';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount('#app');
