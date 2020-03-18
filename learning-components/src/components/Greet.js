import React from 'react';

function Greet({name}) {
	console.log(name)
	return (
		<h1>Welcome {name}</h1>
	)
}

export default Greet;