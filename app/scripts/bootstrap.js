import {Injector} from 'di';
import {Application} from './application';

$(function() {
	console.log(Application);
  var injector = new Injector([]);
  injector.get(Application);
});