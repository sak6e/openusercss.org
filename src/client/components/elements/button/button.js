import {bulmaComponentGenerator as bulma} from 'vue-bulma-components'
import icon from '../icon/icon.vue'
import {leftRight} from '../../../src/client/components/animations'

export default {
  'components': {
    'b-button': bulma('button', 'button'),
    icon
  },
  'methods': {
    ...leftRight
  },
  'props': {
    'icon': {
      'type':    String,
      'default': 'chevron-up'
    }
  }
}
