import {Inject} from 'di';
import {Application as MarionetteApplication} from './marionette'
import {Layout} from './layout/layout';
import {HeaderView} from './layout/headerView';
import {HomeView} from './pages/homeView';
import {Router as PageRouter} from './pages/router';

export class Application extends MarionetteApplication {
  constructor(
    @Inject(Layout) layout
  ) {
    super();
    this.setupRegion();
    this.layout = layout;

    this.addInitializer(() => {
      let currentView = this.bodyRegion.show(layout).currentView;
      currentView.headerRegion.show(new HeaderView());
      currentView.contentRegion.show(new HomeView());
    });


    this.commands.setHandler("changeContent", (content) => {
      this.layout.contentRegion.show(content);
    });

    this.addInitializer(() => {
      console.log("ici");
      new PageRouter(this);
    });

    this.on("start", () => {
      console.log("initialize:after");  
      Backbone.history.start({pushState: true, roor: ""})
    });
  }

  setupRegion() {
    this.addRegions({
      bodyRegion: "body"
    });
  }
}