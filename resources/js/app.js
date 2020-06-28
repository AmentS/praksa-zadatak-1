
require('./bootstrap');
import router from './routes';

window.Vue = require('vue');






const app = new Vue({
    el: '#app',
    router

});
