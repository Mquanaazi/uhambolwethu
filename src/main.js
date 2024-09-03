/* eslint-disable */ 
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueCookies from "vue-cookies"
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
// import store from './store'
import styles from "../src/store/styles.css"


library.add(faStar);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon); // Use app.component instead of Vue.component
app.use(styles);
app.use(store);
app.use(router);
app.use(VueCookies, { expires: '1h' });

app.mount('#app');