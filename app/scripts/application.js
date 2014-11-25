import {Inject, InjectLazy} from 'di';
import {Layout} from './view/layout';
import {HeaderView} from './view/headerView';
import {HomeView} from './view/homeView';


export class Application {
  constructor(
    @Inject(Layout) layout,
    @InjectLazy(HeaderView) headerView
  ) {
    
    // Render and append the layout
    $('body').append(layout.render().el);
    // Show inner view
    layout.header.show(new headerView());
    layout.content.show(new HomeView());
  }
}