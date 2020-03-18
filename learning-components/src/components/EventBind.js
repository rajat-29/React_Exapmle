import React, {Component} from 'react';

class EventBind extends Component {

	constructor() {
		super();

		this.state = {
			message : "Hello",
		}

		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler() {
		console.log('Event Binded');
	}

	render() {
		return (
			<div>
				<p>{this.state.message}</p>
				<button onClick={this.clickHandler}>Bind Event</button>
			</div>	
		)
	}
}

export default EventBind;