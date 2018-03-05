import HomePage from 'Pages/HomePage';
import EditHikePage from 'Pages/EditHikePage';
import MockBackend from 'Services/MockBackend';
import State from 'Models/State';

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
		this.mockBackend = new MockBackend();
		this.hikes = [];
		this.mockBackend.getHikes().then(hikes => {
			this.hikes = hikes;
		});
		this.state = new State();
		this.state.pushPage(new HomePage());
	}

	goToHike(arg) {
		this.state.pushPage(new EditHikePage(arg.data));
	}

	get pages() {
		return this.state.pages;
	}
}
