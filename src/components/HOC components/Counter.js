import React, { useState } from 'react';

function Counter(Component) {
	return function Counter(props) {
		const [count, setCount] = useState(0);
		const increment = () => {
			setCount(count + 1);
		};
		return <Component count={count} increment={increment} />;
	};
}

export default Counter;
