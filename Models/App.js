import NavigationService from 'Services/NavigationService';
import MockBackend from 'Services/MockBackend';

export let current = {
	navigationService: new NavigationService(),
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
		this.current.navigationService.goToHome();
	}
}
