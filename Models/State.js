import MockBackend from 'Services/MockBackend';

class State {
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

export let state = new State()
