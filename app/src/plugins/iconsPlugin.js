import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(faCoffee)

export default {
  install: function (Vue) {
    Vue.component('font-awesome-icon', FontAwesomeIcon)
  }
}
