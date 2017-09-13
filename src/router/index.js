import Vue from 'vue'
import Router from 'vue-router'

import Login from '../components/login/login.vue'
import Home from '../components/home/home.vue'
import Monitor from '../components/page/monitor.vue'
import Mine from '../components/page/mine.vue'
import Recommon from '../components/page/recommon.vue'
import ArticleTrace from '../components/page/articleTrace.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: Login},
    {path: '/login', name: 'login', component: Login},
    {path: '/home', component: Home, children: [
      {path: '/', component: Monitor},
      {path: '/monitor', name: 'monitor', component: Monitor},
      {path: '/recommon', name: 'recommon', component: Recommon},
      {path: '/articleTrace', name: 'articleTrace', component: ArticleTrace},
      {path: '/mine', name: 'mine', component: Mine}
    ]},
  ]
})
