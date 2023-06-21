import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

let url = 'https://jsonplaceholder.typicode.com/users';

function App() {
	const [data, setData] = useState();
	useEffect(() => {
		const res = axios.get(url).then((resp) => {
			setData(resp.data);
		});
	}, []);

	return (
		<div className='App'>
			<ul>
				{data?.map((item) => (
					<li key={item.id}>{item.name}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
