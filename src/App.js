import React, { createContext, useState } from 'react';

import './App.css';
import MyComponent from './MyComponent';

export const MyContext = createContext('');

function App() {
	const [text, setText] = useState('Change my Text');
	return (
		<div className='App'>
			<MyContext.Provider value={{ text, setText }}>
				<MyComponent />
			</MyContext.Provider>
		</div>
	);
}

export default App;
