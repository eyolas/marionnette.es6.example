import {AppRouter} from '../marionette';
import {AboutView} from './aboutView';
import {HomeView} from './homeView';
import {TestView} from './testView';

export class Router extends AppRouter {
	constructor(
		application
	) {
		this.app = application;
		this.routes = {
			"": "home",
			"home": "home",
			"about": "about",
			"test": "test"
		}

		super();
	}

	home() {
		console.log("home");
		this.app.commands.execute("changeContent", new HomeView());
	}

	about() {
		console.log("about");
		this.app.commands.execute("changeContent", new AboutView());
	}

	test() {
		console.log("test");
		this.app.commands.execute("changeContent", new TestView());
	}
}