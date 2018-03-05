import HomePage from 'Pages/HomePage';
import EditHikePage from 'Pages/EditHikePage';
import { state } from 'Models/State';

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
		this.state = state;
		this.hikes = [];
		this.state.mockBackend.getHikes().then(hikes => {
			this.hikes = hikes;
		});
		this.state.pushPage(new HomePage());
	}

	goToHike(arg) {
		this.state.pushPage(new EditHikePage(arg.data));
	}

}
