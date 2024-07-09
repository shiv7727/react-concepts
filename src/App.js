import logo from './logo.svg';
import './App.css';
import A from './A';
import B from './B';
import CountShow from './components/countShow';

function App() {
	return (
		<div className='App'>
			<h1>HOC</h1>
			{/* <A />
			<B /> */}
			<CountShow />
		</div>
	);
}

export default App;
