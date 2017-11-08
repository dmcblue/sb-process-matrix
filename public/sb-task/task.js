import componentTemplate from './task.html'
import componentStyle from './task.less'

import {TaskController} from './task.controller.js'

const bindings = {
  task: '=',
};

export const taskComponent = {
  controller: TaskController,
  template: componentTemplate,
  bindings: bindings
};