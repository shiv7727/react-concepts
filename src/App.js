import React, { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
	const [time, setTime] = useState(0);
	const id = useRef(null);

	useEffect(() => {
		// handleTime();
		return () => clearInterval(id.current);
	}, []);

	const handleTime = () => {
		id.current = setInterval(() => {
			setTime((prevState) => prevState + 1);
		}, 1000);
	};

	return (
		<div className='App'>
			<h3>{time}</h3>
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
