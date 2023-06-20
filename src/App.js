import logo from './logo.svg';
import './App.css';

function App() {
	function x() {
		var i;
		for (i = 0; i <= 5; i++) {
			setTimeout(function () {
				console.log(i);
			}, i * 1000);
		}
	}

	console.log(x());

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
