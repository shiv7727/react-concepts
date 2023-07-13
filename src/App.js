import React, { useState, useEffect } from 'react';
import './App.css';
import { useRef } from 'react';

function App() {
	const [time, setTime] = useState(0);

	useEffect(() => {
		// handleTime();
		return () => clearInterval(id.current);
	}, []);

	let id = useRef();

	function handleTime() {
		id.current = setInterval(() => {
			setTime((prevState) => prevState + 1);
			console.log('time', time);
		}, 1000);
	}

	return (
		<div className='App'>
			<h1>Stopwatch</h1>
			<h1>{time}</h1>
			<button onClick={handleTime}>start</button>
			<button onClick={() => clearInterval(id.current)}>pause</button>
			<button
				onClick={() => {
					clearInterval(id.current);
					setTime(0);
				}}
			>
				Reset
			</button>
		</div>
	);
}

export default App;
