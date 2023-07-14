import React, { useRef } from 'react';
import './App.css';
import User from './User';

function App() {
	let inputRef = useRef(null);
	const updateInput = () => {
		inputRef.current.value = '1000';
		inputRef.current.style.color = 'red';
		inputRef.current.focus();
	};
	return (
		<div className='App'>
			<h1>Forward Ref in React </h1>
			<User ref={inputRef} />
			<button onClick={updateInput}>Update Inbox</button>
		</div>
	);
}

export default App;
