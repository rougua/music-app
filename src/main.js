import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'

import 'common/styles/index.scss'

fastclick.attach(document.body)

// eslint-disable-next-line
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
