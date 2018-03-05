import { state } from "../Models/State";

export default class EditHikePage {
	constructor(hike) {
		this.hike = hike;
		this.hikeCopy = Object.assign({}, hike);
	}

	save() {
		state.mockBackend.updateHike(
			this.hike.id, 
			this.hike.name, 
			this.hike.location, 
			this.hike.distance, 
			this.hike.rating, 
			this.hike.comments
		).catch(err => {
			console.log("There was an error updating hike " + this.hike.id + ": " + err);
		});
		
		state.popPage();
	}

	cancel() {
		Object.assign(this.hike, this.hikeCopy);
		state.popPage();
	}
}
