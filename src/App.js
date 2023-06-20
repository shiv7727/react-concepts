import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { getData } from './utils/promiseAllAPI';
import { race } from './utils/race';

function App() {
	// promises
	// paralle
	// race
	// sequence
	// one way to use Promise all to call multiple apis simultaneously

	useEffect(() => {
		// getData();
		// race();
	}, []);
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
