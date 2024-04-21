import { createApp } from 'vue';
import store from './store';
import App from './App.vue';
import i18n from './plugins/i18n';
import { register } from 'swiper/element/bundle';
import './assets/styles/index.scss';

const app = createApp(App);
register();
app.use(store);
app.use(i18n);
app.mount('#app');
