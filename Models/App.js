import HomePage from 'Pages/HomePage';
import EditHikePage from 'Pages/EditHikePage';
import MockBackend from 'Services/MockBackend';

class Hike {
	constructor(id, name, location, distance, rating, comments) {
		this.id = id;
		this.name = name;
		this.location = location;
		this.distance = distance;
		this.rating = rating;
		this.comments = comments;
	}
}

class Current {
	constructor() {
		this.list = [];
	}

	get pages() {
		return this.list;
	}

	pushPage(p) {
		this.list.push(p);
	}

	popPage() {
		this.list.pop();
	}
}

export var current = new Current();

export default class App {
	constructor() {
		this.mockBackend = new MockBackend();
		this.hikes = [];
		this.mockBackend.getHikes().then(hikes => {
			this.hikes = hikes;
		});
		this.state = current = new Current();
		current.pushPage(new HomePage());
		// current.pages.push(new HomePage());
	}

	goToHike(arg) {
		current.pushPage(new EditHikePage(arg.data));
		// current.pages.push(new EditHikePage(arg.data));
	}

	get pages() {
		return current.pages;
	}
}
