import React from 'react';
import HOC from './HOC';

function HoverCounter(props) {
	return (
		<div>
			<h1>Hover counter {props.count} </h1>
			<button onMouseOver={props.incrementCountFunc}>
				Hover {props.count} times
			</button>
		</div>
	);
}

export default HOC(HoverCounter);
