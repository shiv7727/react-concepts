import React, { useState, useRef } from 'react';
import './App.css';

function App() {
	const [time, setTime] = useState(0);
	const id = useRef(null);

	const handleTime = () => {
		setInterval(() => {
			setTime((prevState) => prevState + 1);
		}, 1000);
	};

	return (
		<div className='App'>
			<h3>{time}</h3>
		</div>
	);
}

export default App;
