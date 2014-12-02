import {ItemView} from '../marionette';
import {User} from '../model/user'

export class TestView extends ItemView {
    constructor() {
        this.model = new User();
        this.template = 'test';
        super();
    }
}