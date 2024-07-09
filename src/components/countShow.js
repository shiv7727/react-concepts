import React from 'react';
import Counter from './HOC components/Counter';

const countShow = (props) => {
	console.log(props);
	return (
		<div>
			<h1>{props.count}</h1>
			<button onClick={props.increment}> A click {props.count} times</button>
		</div>
	);
};

export default Counter(countShow);
