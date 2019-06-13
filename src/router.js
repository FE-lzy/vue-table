import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from './components/HomePage';

Vue.use(VueRouter);

var routes = [{
    path:"/",
    component:HomePage
}];

const router = new VueRouter({
    routes
});

export default router;