import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementNum, decrementNum } from './actions/index';
import './App.css';

function App() {
	const dispatch = useDispatch();
	const myState = useSelector((state) => state.changeTheNumber.count);
	return (
		<div className='App'>
			<h1>Increment and Decrement using React redux</h1>
			<div>
				<button onClick={() => dispatch(decrementNum(10))}>-</button>

				<input type='text' value={myState} />

				<button onClick={() => dispatch(incrementNum(10))}>+</button>
			</div>
		</div>
	);
}

export default App;
