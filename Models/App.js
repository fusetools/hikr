import HomePage from 'Pages/HomePage';
import EditHikePage from 'Pages/EditHikePage';
import MockBackend from 'Services/MockBackend';

class Current {
	constructor() {
		this.pages = [];
		this.mockBackend = new MockBackend();
	}

	pushPage(p) {
		this.pages.push(p);
	}

	popPage() {
		this.pages.pop();
	}
}

export let current = new Current()

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

export default class App {
	constructor() {
		this.current = current;
		this.hikes = [];
		this.current.mockBackend.getHikes().then(hikes => {
			this.hikes = hikes;
		});
		this.current.pushPage(new HomePage());
	}

	goToHike(arg) {
		this.current.pushPage(new EditHikePage(arg.data));
	}

}
