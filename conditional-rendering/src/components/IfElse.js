import React, {Component} from 'react';

class IfElse extends Component {

	constructor() {
		super();

		this.state = {
			logged: true,
		}
	}

	render() {
		if(this.state.logged) {
			return (
				<div>Hello Rajat</div>
			)
		}
		else {
			return (
			<div>Hello Guest</div>
			)
		}
	}
}

export default IfElse;