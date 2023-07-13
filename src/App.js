import React, { useState, useMemo } from 'react';
import './App.css';

function App() {
	const [count, setCount] = useState(0);
	const [countInTens, setCountInTens] = useState(0);

	const multyplyCountByFive = useMemo(() => {
		console.log('calling memo function ');
		return count * 5;
	}, [count]);

	return (
		<div className='App'>
			<p> {count}</p>
			<button onClick={() => setCount((prevCount) => prevCount + 1)}>
				countIncrement by 1
			</button>
			<p> {countInTens}</p>
			<button onClick={() => setCountInTens((prevCount) => prevCount + 10)}>
				countIncrement by 1
			</button>
			<hr />
			<p>{multyplyCountByFive}</p>
		</div>
	);
}

export default App;
