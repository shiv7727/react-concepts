import logo from './logo.svg';
import './App.css';

function App() {
	// HO functions are the functions which takes another function as a paramter
	// multiplyBy is a higher order function
	const multiplyBy = (num1) => {
		return (num2) => {
			return num1 * num2;
		};
	};

	const multiplyByTwo = multiplyBy(2);
	const multiplyByFive = multiplyBy(5);

	console.log(multiplyByTwo(5));
	console.log(multiplyByFive(10));

	return (
		<div className='App'>
			<h1>Higher order Function </h1>
		</div>
	);
}

export default App;
