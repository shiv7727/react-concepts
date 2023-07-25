import React, { useState } from 'react';

function RenderProps(props) {
	console.log(props);
	const [count, setcount] = useState(0);
	const IncrementCounter = () => {
		setcount(count + 1);
	};
	return props.render(count, IncrementCounter);
}

export default RenderProps;
