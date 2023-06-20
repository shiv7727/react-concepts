import React, { useState } from 'react';

function UpdatedComponent(OrignalComponent) {
	function NewComponent() {
		const [count, setCount] = useState(0);
		const handleCount = () => {
			setCount(count + 1);
		};
		return <OrignalComponent handleCount={handleCount} count={count} />;
	}
	return NewComponent;
}

export default UpdatedComponent;
