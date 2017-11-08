import componentTemplate from './deliverable.html'
import componentStyle from './deliverable.less'

import {DeliverableController} from './deliverable.controller.js'

const bindings = {
  deliverable: '=',
};

export const deliverableComponent = {
  controller: DeliverableController,
  template: componentTemplate,
  bindings: bindings
};