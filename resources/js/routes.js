import VueRouter from 'vue-router';


let routes = [
    {
        path: '/',
        component: require('./components/AddUser').default
    }

]

export default new VueRouter({
    routes
   /* linkActiveClass: 'font-bold'*/

});
