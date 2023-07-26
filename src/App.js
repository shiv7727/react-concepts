import logo from './logo.svg';
import './App.css';

function App() {
	const arr = [1, 2, [3, 4, 5, [6, 7, 8, [9, 0]]]];
	const newArr = [];

	function flatArryFunc(arr) {
		arr.forEach((item) => {
			if (typeof item === 'number') {
				newArr.push(item);
			} else if (Array.isArray(item)) {
				flatArryFunc(item);
			}
			// console.log(item);
		});
	}
	flatArryFunc(arr);
	console.log('logic function ', newArr);

	console.log('flat method', arr.flat(Infinity));

	return (
		<div className='App'>
			<h1>JS</h1>
		</div>
	);
}

export default App;
