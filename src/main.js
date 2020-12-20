import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import './registerServiceWorker'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'fr',
  messages: {
    en: {},
    fr: {}
  }
})

Vue.config.productionTip = false

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
