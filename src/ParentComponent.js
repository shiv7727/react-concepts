import React, { useState, useCallback } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
	const [count, setCount] = useState(0);
	const handleClick = useCallback(() => {
		setCount(count + 1);
	}, [count]);

	return <ChildComponent count={count} handleClick={handleClick} />;
}

export default ParentComponent;
