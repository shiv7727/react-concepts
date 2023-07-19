import React from 'react';

export default function Hover(props) {

	return (
		<div>
			<button onMouseOver={props.increment}>Mouse over on :{props.count}</button>
		</div>
	);
}
