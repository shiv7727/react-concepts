import React, { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
	let id = useRef();
	const [time, setTime] = useState(0);

	const handleTime = () => {
		id.current = setTime(() => {
			setTime((prevState) => prevState + 1);
		}, 1000);
	};

	useEffect(() => {
		handleTime();
		return () => {
			clearInterval(id.current);
		};
	}, []);

	return (
		<div className='App'>
			<h1>{time}</h1>
			<div>
				<button>Start</button>
				<button>pause</button>
				<button>reset</button>
			</div>
		</div>
	);
}

export default App;
