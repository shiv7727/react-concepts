import React from 'react';
import './App.css';
import ParentComponent from './ParentComponent';

// link for reading : https://dev.to/ahmedgmurtaza/react-performance-optimization-usememo-vs-usecallback-2p2a#:~:text=To%20summarize%2C%20the%20main%20difference,useMemo%20returns%20a%20memoized%20value.

function App() {
	return (
		<div className='App'>
			
			<ParentComponent />
		</div>
	);
}

export default App;
