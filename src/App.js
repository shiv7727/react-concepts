import { useReducer } from 'react';
import './App.css';

const reducer = (state, action) => {
	switch (action.type) {
		case 'INCREMENT_AGE':
			return {
				...state,
				age: state.age + action.payload,
			};
		default:
			return state;
	}
};
function App() {
	const [state, dispatch] = useReducer(reducer, { age: 0 });
	return (
		<div className='App'>
			<h1>Use Reducer</h1>
			<h3>Age:{state.age}</h3>
			<button
				onClick={() =>
					dispatch({
						type: 'INCREMENT_AGE',
						payload: 10,
					})
				}
			>
				Incrcease age button
			</button>
		</div>
	);
}

export default App;
