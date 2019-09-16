import { qs } from './utils';
import '../stylesheets/style.scss';
import {data} from './data';
import {Model} from './model';
import {draw} from './draw';
import {Chart} from './chart';
const elementResizeEvent = require('element-resize-event');
const element = qs('#chart');

draw(element);
elementResizeEvent(element, function() {
  element.removeChild(qs('svg'));
  draw(element);
});
