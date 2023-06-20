import React, { useState } from 'react';
import UpdatedComponent from './HOC';

function CounterOne({ count, handleCount }) {
	return (
		<div>
			<button onClick={handleCount}>Count one</button>
			<h1>CounterOne {count}</h1>
		</div>
	);
}

export default UpdatedComponent(CounterOne);
