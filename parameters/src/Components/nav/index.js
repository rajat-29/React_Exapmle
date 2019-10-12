import React from 'react';
import {Link} from 'react-router-dom'
import {Navbar,Nav} from 'react-bootstrap';

export default function(props)
{
	return(
		<Navbar bg="primary" vaiant="dark">
		<Nav className="mr-auto">
			<Link to="/"><button>Home</button></Link>
			<Link to="/user"><button>Users</button></Link>
		</Nav>
		</Navbar>
	)
}