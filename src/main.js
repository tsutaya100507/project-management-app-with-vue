import Vue from 'vue'
import App from './App'
import ErrorBoundary from './ErrorBoundary.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = process.env.NODE_ENV === 'production'
Vue.config.performance = true
Vue.component(ErrorBoundary.name, ErrorBoundary)
Vue.config.errorHandler = (err, vm, info) => {
  console.error('errorHandler err:', err)
  console.error('errorHandler vm:', vm)
  console.error('errorHandler info:', info)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
