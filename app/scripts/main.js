import {Injector, Inject, InjectLazy} from 'di';
import {Layout} from './layout';
import {Header, Home} from './layouts';



class Application {
  constructor(
    @Inject(Layout) layout,
    @InjectLazy(Header) header
  ) {
    // Render and append the layout
    $('body').append(layout.render().el);
    // Show inner view
    layout.header.show(new header());
    layout.content.show(new Home());
  }
}


$(function() {
  var injector = new Injector([]);
  injector.get(Application);
});