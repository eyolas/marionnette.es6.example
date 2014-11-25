import {ItemView} from '../marionette';
import {Layout} from './layout';
import {Inject} from 'di';
import {AboutView} from './aboutView'
import {HomeView} from './homeView';
import {TestView} from './testView';

@Inject(Layout)
export class HeaderView extends ItemView {
    constructor(layout) {
        console.log("construct layout");
        this.layout = layout;
        this.template = '#header-template';

        this.events = {
            'click .home': 'home',
            'click .about': 'about',
            'click .test': 'test'
        };
        super();
    }


    home() {
        // show Home View in the content region
        this.layout.content.show(new HomeView());
    }
    about() {
        // show About View in the content region
        this.layout.content.show(new AboutView());
    }

    test() {
        this.layout.content.show(new TestView());
    }
}