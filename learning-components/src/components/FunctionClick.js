import React, {Component} from 'react';

class FunctionClick extends Component {

	buttonClick() {
		console.log('hi')
	}

	render() {
		return (
			<button onClick={() => this.buttonClick()}>Click Me</button>
		)
	}
}

export default FunctionClick;