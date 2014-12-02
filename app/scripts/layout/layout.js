import {LayoutView} from '../marionette';

export class Layout extends LayoutView {
  constructor() {
    this.template = 'layout-template';
    // define regions
    this.regions = {
      headerRegion: '.header',
      contentRegion: '.content'
    }

    super();
  }
}