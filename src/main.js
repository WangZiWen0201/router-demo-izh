import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
