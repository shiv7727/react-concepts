import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { getData } from './utils/promiseAllAPI';
import { race } from './utils/race';
import axios from 'axios';

function App() {
	// promises
	// paralle
	// race
	// sequence
	// one way to use Promise all to call multiple apis simultaneously

	const getData = async () => {
		try {
			const data = await Promise.all([
				// put here all , race , allsettled to check result
				axios.get('https://jsonplaceh1older.typicode.com/users'),
				axios.get('https://jsonplaceholder.typicode.com/posts'),
				axios.get('https://jsonplaceholder.typicode.com/albums'),
			]);
			console.log('data', data);
		} catch (err) {
			console.log(err);
		}
	};

	// Note: Promise.all gives the result only after all apis response he get

	useEffect(() => {
		getData();
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
