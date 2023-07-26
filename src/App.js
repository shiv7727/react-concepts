import React, { useState, useRef } from 'react';
import './App.css';

function App() {
	const [time, setTime] = useState(0);
	const id = useRef(null);



	return (
		<div className='App'>
			<h3>{time}</h3>
		</div>
	);
}

export default App;
