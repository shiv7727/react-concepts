import React, { useState, useRef } from 'react';
import './App.css';

const App = () => {
	const initialState = {
		hr: 0,
		min: 0,
		sec: 0,
	};
	const [time, setTime] = useState(initialState);
	let id = useRef();

	const handleTime = () => {
		id.current = setInterval(() => {
			console.log('calling setTime');
			setTime((prevState) => {
				if (prevState.sec === 60) {
					return { ...prevState, hr: 0, min: prevState.min + 1, sec: 0 };
				}
				if (prevState.min === 60) {
					return { ...prevState, hr: prevState.hr + 1, min: 0, sec: 0 };
				}
				return { ...prevState, sec: prevState.sec + 1 };
			});
		}, 1000);
	};

	return (
		<div className='App'>
			<h1>StopWatch</h1>
			<h1>
				<p>
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
				</p>
			</h1>
			<button onClick={handleTime}>Start</button>
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
};

export default App;
