import React, {Component} from 'react';

class TernaryOperator extends Component {

	constructor() {
		super();

		this.state = {
			logged: true,
		}
	}

	render() {

		return (
			this.state.logged ? 
			<div>Hello Rajat</div> :
			<div>Hello Guest</div>
		)
	}
}

export default TernaryOperator;