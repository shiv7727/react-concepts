import React, { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
	const [time, setTime] = useState({
		hrs: 0,
		min: 0,
		sec: 0,
	});
	const id = useRef(null);

	useEffect(() => {
		// handleTime();
		return () => clearInterval(id.current);
	}, []);

	console.log(time);
	const handleTime = () => {
		id.current = setInterval(() => {
			setTime((prevState) => {
				if (prevState.min === 60) {
					return { ...prevState, hrs: prevState.hrs + 1, min: 0 };
				}
				if (prevState.sec === 60) {
					return { ...prevState, min: prevState.min + 1, sec: 0 };
				}
				return { ...prevState, sec: prevState.sec + 1 };
			});
		}, 1000);
	};

	return (
		<div className='App'>
			<h3>
				{time.hrs.toLocaleString('en-US', {
					useGrouping: false,
					minimumIntegerDigits: 2,
				})}
				:
				{time.min.toLocaleString('en-US', {
					useGrouping: false,
					minimumIntegerDigits: 2,
				})}
				:
				{time.sec.toLocaleString('en-US', {
					useGrouping: false,
					minimumIntegerDigits: 2,
				})}
			</h3>
			<button onClick={handleTime}>start</button>
			<button onClick={() => clearInterval(id.current)}>pause</button>
			<button
				onClick={() => {
					clearInterval(id.current);
					setTime({
						hrs: 0,
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
