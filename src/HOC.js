import React, { useState } from 'react';

const HOC = (WrapperComponent) => {
	function HOC() {
		const [count, setCount] = useState(0);
		const incrementCountFunc = () => {
			setCount(count + 1);
		};

		return (
			<div>
				<WrapperComponent
					count={count}
					incrementCountFunc={incrementCountFunc}
				/>
			</div>
		);
	}
	return HOC;
};

export default HOC;
