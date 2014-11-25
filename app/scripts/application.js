import {Inject, InjectLazy} from 'di';
import {Application as MarionetteApplication} from './Marionette'
import {Layout} from './view/layout';
import {HeaderView} from './view/headerView';
import {HomeView} from './view/homeView';


export class Application extends MarionetteApplication{
  constructor(
    @Inject(Layout) layout,
    @InjectLazy(HeaderView) headerView
  ) {
    
    this.setupRegion();

    this.body.show(layout)
      .currentView.header.show(new headerView())
      .currentView.content.show(new HomeView());
  }

  setupRegion() {
    this.addRegions({
      body: "body"
    });
  }
}