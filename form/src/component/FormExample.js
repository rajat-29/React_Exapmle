import React, {Component} from 'react';

class FormExample extends Component {

	constructor() {
		super();

		this.state = {
			username : "",
			topic : 'React',
		}
		
		this.changeUsername = this.changeUsername.bind(this);
		this.changeTopic = this.changeTopic.bind(this);
		this.submitData = this.submitData.bind(this);
	}

	changeUsername(event) {
		this.setState ({
			username: event.target.value,
		})
	}

	changeTopic(event) {
		this.setState ({
			topic : event.target.value,
		})
	}

	submitData(event) {
		event.preventDefault();
		alert("hi")
	}

	render() {
		return (
		<form onSubmit={this.submitData}>	
			<div>
				<label>Username : </label>
				<input type="text" 
				value={this.state.username}
				onChange={this.changeUsername}
				/>
			</div>

			<div>
				<label>Topic : </label>
				<select value={this.state.topic}
				onChange={this.changeTopic}>
					<option value='React'>React</option>
					<option value='Angular'>Angular</option>
				</select>
			</div>

			<input type='submit' value='Create Exercise Log' className='btn btn-primary' />
		</form>	
		)
	}
}

export default FormExample;