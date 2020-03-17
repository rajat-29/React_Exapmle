import React, {Component} from 'react';

class Welcome extends Component {
	render() {
		console.log(this.props)
		return <h1>Class Component {this.props.name}</h1>
	}
}

export default Welcome;