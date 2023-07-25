import React from 'react';

export default function ClickCounter(props) {
	console.log(props);
	return (
		<div>
			<h1>ClickCounter</h1>
			<button onClick={props.IncrementCounter}>
				Click Count is {props.count}
			</button>
		</div>
	);
}
