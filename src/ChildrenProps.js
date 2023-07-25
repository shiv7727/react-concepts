import React, { useState } from 'react';

export default function ChildrenProps(props) {
	const [count, setcount] = useState(0);
	const IncrementCounter = () => {
		setcount(count + 1);
	};
	return <div>{props.children(count, IncrementCounter)}</div>;
}
