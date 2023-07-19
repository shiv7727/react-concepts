import React from 'react';
import Counter from './Counter';
function B(props) {
	return (
		<div>
			<button onMouseOver={props.increment}>B Hover {props.count} times</button>
		</div>
	);
}
export default Counter(B);
