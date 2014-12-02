import {Injector} from 'di';
import {Application} from './application';

$(function() {
  var injector = new Injector([]);
  var application = injector.get(Application);
  application.start();
});