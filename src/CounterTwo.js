import React, { useState } from 'react';
import UpdatedComponent from './HOC';

function CounterTwo({ count, handleCount }) {
	return (
		<div>
			<div>
				<button onClick={handleCount}>Count Two</button>
				<h1>CounterTwo {count}</h1>
			</div>
		</div>
	);
}

export default UpdatedComponent(CounterTwo);
