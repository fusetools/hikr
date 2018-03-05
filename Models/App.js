import HomePage from 'Pages/HomePage';
import EditHikePage from 'Pages/EditHikePage';
import MockBackend from 'Services/MockBackend';

export let current = {
	pages: [],
	mockBackend: new MockBackend()
};

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
		this.current.pages.push(new HomePage());
	}

	goToHike(arg) {
		this.current.pages.push(new EditHikePage(arg.data));
	}

}
