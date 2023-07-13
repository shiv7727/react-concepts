import React, { useState, useEffect, useRef } from 'react';

import './App.css';

function App() {
	const [time, setTime] = useState({
		hr: 0,
		min: 0,
		sec: 0,
	});

	let id = useRef();

	useEffect(() => {
		// handleTime();

		return () => clearInterval(id.current);
	}, []);

	const handleTime = () => {
		id.current = setInterval(() => {
			setTime((PrevState) => {
				if (PrevState.min === 60) {
					return { ...PrevState, hr: PrevState.hr + 1, min: 0, sec: 0 };
				}
				if (PrevState.sec === 60) {
					return { ...PrevState, min: PrevState.min + 1, sec: 0 };
				}
				return { ...PrevState, sec: PrevState.sec + 1 };
			});
		}, 10);
	};

	return (
		<div className='App'>
			<h1>Stopwatch</h1>
			{time.hr.toLocaleString('en-US', {
				minimumIntegerDigits: 2,
				useGrouping: false,
			})}
			:
			{time.min.toLocaleString('en-US', {
				minimumIntegerDigits: 2,
				useGrouping: false,
			})}
			:
			{time.sec.toLocaleString('en-US', {
				minimumIntegerDigits: 2,
				useGrouping: false,
			})}
			<div>
				<button onClick={handleTime}>Start</button>
				<button onClick={() => clearInterval(id.current)}>pause</button>
				<button
					onClick={() => {
						clearInterval(id.current);
						setTime({ hr: 0, min: 0, sec: 0 });
					}}
				>
					Reset
				</button>
			</div>
		</div>
	);
}

export default App;
