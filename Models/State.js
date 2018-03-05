class State {
	constructor() {
		this.pages = [];
	}

	pushPage(p) {
		this.pages.push(p);
	}

	popPage() {
		this.pages.pop();
	}
}

export let state = new State()
