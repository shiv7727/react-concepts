import React, { useContext } from 'react';
import { MyContext } from './App';

function MyComponent() {
	const { text, setText } = useContext(MyContext);
	return (
		<div>
			<h1>MyComponent</h1>
			<h2>{text}</h2>
			<button onClick={() => setText('Hello world !!!')}>
				Click me to change text
			</button>
		</div>
	);
}

export default MyComponent;
