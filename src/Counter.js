import React, { useState } from 'react';

const Counter = (WrappedComponent) => {
	function Counter(props) {
		const [count, setCount] = useState(0);
		const increment = () => {
			setCount(count + 1);
		};
		return (
			<div>
				<WrappedComponent count={count} increment={increment} />
			</div>
		);
	}
	return Counter;
};
export default Counter;
