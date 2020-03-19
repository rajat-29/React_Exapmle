import React, {Component} from 'react';

class ElementVariable extends Component {

	constructor() {
		super();

		this.state = {
			logged: false,
		}
	}

	render() {

		var message;

		if(this.state.logged) {
			message = <div>Hello Rajat</div>
		}
		else {
			message = <div>Hello Guest</div>
		}

		return (
			<div>{message}</div>
		)
	}
}

export default ElementVariable;