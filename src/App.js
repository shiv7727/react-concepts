import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
	const [time, setTime] = useState(0);
	let id = useRef(null);
	let sizeOfViewPort = visualViewport.width;
	// let sizeOfViewPort = 10;
	function handleTime() {
		id.current = setInterval(() => {
			setTime((prevState) => prevState + 1);
		}, 1);
	}

	useEffect(() => {
		handleTime();
		return () => clearInterval(id.current);
	}, []);

	useEffect(() => {
		if (time > sizeOfViewPort - 1) {
			clearInterval(id.current);
		}
	}, [time]);
	return (
		<div className='App'>
			<h1>
				Progres barv :: {time} and max:: {sizeOfViewPort}
			</h1>
			<progress value={time} max={sizeOfViewPort} />
		</div>
	);
}

export default App;
