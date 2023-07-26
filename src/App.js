import React from 'react';
import './App.css';

function App() {
	let str = 'hello world world is good but world is not very good';
	let strArr = str.split(' ');
	console.log(strArr);

	let obj = {};
	function wordCount(strArr) {
		for (let i = 0; i < strArr.length; i++) {
			if (obj[strArr[i]] === undefined) {
				obj[strArr[i]] = 1;
			} else {
				obj[strArr[i]]++;
			}
		}
	}
	wordCount(strArr);
	console.log('obj', obj);
	return (
		<div className='App'>
			<h1>Duplicate string count</h1>
		</div>
	);
}

export default App;
