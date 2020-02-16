/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import '../css/app.css';
import App from './components/App/App';
import Vue from 'vue';
import vuetify from './plugins/vuetify';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Exemple from "./components/Exemple";
// css
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';

Vue.component("exemple",Exemple);

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

new Vue({
    el: '#app',
    vuetify,
    render: h => h(App)
});

console.log('Hello Webpack Encore! Edit me in assets/js/app.js');
