import React from 'react';
import Counter from './Counter';
function A(props) {
	return (
		<div>
			<button onClick={props.increment}> A click {props.count} times</button>
		</div>
	);
}

export default Counter(A);
