import logo from './logo.svg';
import './App.css';

function App() {
	function* countAppleSales() {
		const salesList = [3, 5, 7];
		for (let i = 0; i < salesList.length; i++) {
			yield salesList[i];
		}
	}

	const appleStore = countAppleSales(); // generator function
	console.log(appleStore.next());
	console.log(appleStore.next());
	console.log(appleStore.next());
	console.log(appleStore.next());

	return (
		<div className='App'>
			<h1>yield generator function </h1>
		</div>
	);
}

export default App;
