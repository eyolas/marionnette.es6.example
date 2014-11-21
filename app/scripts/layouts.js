import {ItemView, Model} from './marionette';
import {User} from './model/user'
import {Layout} from './layout';
import {Inject} from 'di';

export class Home extends ItemView {
    constructor() {
        this.template = '#home-template';
        super();
    }
}

export class About extends ItemView {
    constructor() {
        this.template = '#about-template';
        super();
    }
}


export class Test extends ItemView {
    constructor() {
        this.model = new User();
        this.template = 'test';
        super();
    }
}

@Inject(Layout)
export class Header extends ItemView {
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
        this.layout.content.show(new Home());
    }
    about() {
        // show About View in the content region
        this.layout.content.show(new About());
    }

    test() {
        this.layout.content.show(new Test());
    }
}