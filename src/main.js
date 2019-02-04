import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import fastclick from 'fastclick'

import 'common/styles/index.scss'

fastclick.attach(document.body)

// eslint-disable-next-line
new Vue({
  el: '#app',
  render: h => h(App)
})
