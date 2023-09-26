import React, { useState, useEffect } from 'react';
import './App.css';
import { useRef } from 'react';

function App() {
	
	const [time, setTime] = useState({
		hr: 0,
		min: 0,
		sec: 0,
	});

	useEffect(() => {
		// handleTime();
		return () => clearInterval(id.current);
	}, []);

	let id = useRef();

	function handleTime() {
		id.current = setInterval(() => {
			setTime((prevState) => {
				if (prevState.sec == 60) {
					return { ...prevState, min: prevState.min + 1, sec: 0 };
				}
				if (prevState.min == 60) {
					return { ...prevState, hr: prevState.hr + 1, min: 0, sec: 0 };
				}
				return { ...prevState, sec: prevState.sec + 1 };
			});
			console.log('time', time);
		}, 1000);
	}

	return (
		<div className='App'>
			<h1>Stopwatch</h1>
			<h1>
				{time.hr?.toLocaleString('en-US', {
					minimumIntegerDigits: 2,
					useGrouping: false,
				})}
				:
				{time.min?.toLocaleString('en-US', {
					minimumIntegerDigits: 2,
					useGrouping: false,
				})}
				:
				{time.sec?.toLocaleString('en-US', {
					minimumIntegerDigits: 2,
					useGrouping: false,
				})}
			</h1>
			<button onClick={handleTime}>start</button>
			<button onClick={() => clearInterval(id.current)}>pause</button>
			<button
				onClick={() => {
					clearInterval(id.current);
					setTime({
						hr: 0,
						min: 0,
						sec: 0,
					});
				}}
			>
				Reset
			</button>
		</div>
	);
}

export default App;
