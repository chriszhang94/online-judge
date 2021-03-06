import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import ace from 'ace-builds'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(ace)
Vue.config.productionTip = false
Vue.use(ElementUI, { locale })

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
