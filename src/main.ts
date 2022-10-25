import { createApp } from 'vue';
import App from './App.vue';

import router from './router';

import { createRedux } from './storePlugin';
import { store } from './stores/store';

import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';

import './assets/global.css';
// import { createPinia } from 'pinia';

const app = createApp(App);
app.use(createRedux(store));
// app.use(createPinia());
app.use(router);

app.mount('#app');
