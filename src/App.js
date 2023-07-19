import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';

function App() {
	return (
		<div className='App'>
			<h1>Render props</h1>
			{/* <Counter render={(params) => params} /> */}
			{/* <ClickCounter />
			<HoverCounter /> */}

			<Counter
				render={(count, incrementCount) => (
					<HoverCounter count={count} incrementCount={incrementCount} />
				)}
			/>
			<Counter
				render={(count, incrementCount) => (
					<ClickCounter count={count} incrementCount={incrementCount} />
				)}
			/>
		</div>
	);
}

export default App;
