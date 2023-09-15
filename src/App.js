import React, { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
	let id = useRef();
	const [time, setTime] = useState({
		h: 0,
		m: 0,
		s: 0,
	});

	const handleTime = () => {
		id.current = setInterval(() => {
			setTime((prevState) => {
				if (prevState.m === 60) {
					return { ...prevState, h: prevState.h + 1, m: 0, s: 0 };
				}
				if (prevState.s === 60) {
					return { ...prevState, m: prevState.m + 1, s: 0 };
				}
				return { ...prevState, s: prevState.s + 1 };
			});
		}, 1);
	};

	useEffect(() => {
		// handleTime();
		return () => {
			clearInterval(id.current);
		};
	}, []);

	return (
		<div className='App'>
			<h1>
				{time.h}:{time.m}:{time.s}
			</h1>
			<div>
				<button onClick={handleTime}>Start</button>
				<button onClick={() => clearInterval(id.current)}>pause</button>
				<button
					onClick={() => {
						clearInterval(id.current);
						setTime({
							h: 0,
							m: 0,
							s: 0,
						});
					}}
				>
					reset
				</button>
			</div>
		</div>
	);
}

export default App;
