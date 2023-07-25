import React from 'react';

export default function HoverCounter(props) {
	return (
		<div>
			<h1>HoverCounter</h1>
			<button onMouseOver={props.IncrementCounter}>
				Hover Count is {props.count}
			</button>
		</div>
	);
}
