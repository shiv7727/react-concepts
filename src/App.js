import UseFetch from './UseFetch';
import './App.css';

function App() {
	const [data] = UseFetch('https://jsonplaceholder.typicode.com/posts');
	return (
		<div className='App'>
			<ul>
				{data?.map((item) => (
					<li key={item?.id}>{item?.title}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
