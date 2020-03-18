import React, {Component} from 'react';
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

	constructor() {
		super();

		this.state = {
			parentName : "Parent",
		}

		this.greetParent = this.greetParent.bind(this);
	}

	greetParent() {
		alert("Hello " + this.state.parentName);
	}

	render() {
		return (
			<ChildComponent greetHandler = {this.greetParent} />
		)
	}
}


export default ParentComponent;