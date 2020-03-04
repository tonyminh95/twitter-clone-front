import Vue from 'vue'
import App from './App.vue'
// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faHome, faUserCircle, faEllipsisH, faExpand } from '@fortawesome/free-solid-svg-icons'
import { faBell, faEnvelope, faBookmark, faListAlt } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTwitter, faHome, faUserCircle, faEllipsisH, faExpand, faBell, faEnvelope, faBookmark, faListAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
