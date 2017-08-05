import Vue from 'vue'
import App from './App'
import store from './store'
import style from '../css/style.scss'

new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
});