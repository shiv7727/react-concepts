import logo from './logo.svg';
import './App.css';
import Click from './Click';
import Hover from './Hover';
import RenderProps from './RenderProps';

function App() {
	return (
		<div className='App'>
			{/* <Click /> */}
			{/* <Hover /> */}
			<RenderProps
				render={(count, increment) => (
					<Click count={count} increment={increment} />
				)}
			/>
			<RenderProps
				render={(count, increment) => (
					<Hover count={count} increment={increment} />
				)}
			/>
		</div>
	);
}

export default App;
