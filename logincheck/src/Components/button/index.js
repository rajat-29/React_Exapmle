import React from 'react';

export default function(props)
{
	return(
		<button onClick={props.click}>{props.p}</button>
	)
}