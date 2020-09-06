import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
    return originalPush.call(this, location).catch(err => err)
}
const routes = [
    { path: '/', redirect: { name: 'Home' }},
    { path: '/login', name: 'login', component: resolve => require(['@/views/login'], resolve) },
    { path: '/Home', name: 'Home', component: resolve => require(['@/views/Home'], resolve) },
    { path: '/About', name: 'About', component: resolve => require(['@/views/About'], resolve) }
]
export default new Router({
    mode: 'hash',
    base: process.env.VUE_APP_BASE_URL,
    routes
})
