import React from 'react';

function ChildComponent({ count, handleClick }) {
	return (
		<div>
			<h1> useCallback</h1>
			<h3>{count}</h3>
			<button onClick={handleClick}>Click me </button>
		</div>
	);
}

export default ChildComponent;
