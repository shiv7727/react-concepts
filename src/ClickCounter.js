import React from 'react';
import HOC from './HOC';
function ClickCounter(props) {
	return (
		<div>
			<h1>Click Counter {props.count}</h1>
			<button onClick={props.incrementCountFunc}>
				Click {props.count} times
			</button>
		</div>
	);
}

export default HOC(ClickCounter);
