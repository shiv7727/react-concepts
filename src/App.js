import { useEffect, useRef } from 'react';
import './App.css';

function App() {
	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
		inputRef.current.style.color = 'red';
	}, []);

	return (
		<div className='App'>
			<input type='text' name='name' id='name' ref={inputRef} />
		</div>
	);
}

export default App;
