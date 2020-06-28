import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';


window.axios = axios;
window.Vue = Vue;
Vue.use(VueRouter);

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) {
}



