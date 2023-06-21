import React, { useState, useCallback, useMemo } from 'react';

function ParentComponent() {
	const [count, setCount] = useState(0);
	const handleClick = useCallback(() => {
		setCount(count + 1);
	}, [count]);

	return (
		<>
			<div>
				<h1> useCallback</h1>
				<h3>{count}</h3>
				<button onClick={handleClick}>Click me </button>
			</div>
		</>
	);
}

export default ParentComponent;
