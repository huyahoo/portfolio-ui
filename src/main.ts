import { createApp } from 'vue';
import App from './App.vue';
const app = createApp(App);

import './assets/styles/index.scss';

import { register } from 'swiper/element/bundle';
register();

import store from './store';
app.use(store);

import i18n from './plugins/i18n';
app.use(i18n);

app.mount('#app');
