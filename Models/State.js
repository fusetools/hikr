export default class State {
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
