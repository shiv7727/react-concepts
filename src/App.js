import './App.css';
import RenderChildExample from './RenderChildExample';
import RenderExample from './RenderExample';

function App() {
	return (
		<div className='App'>
			{/* Render props pattern example  */}
			{/* <RenderExample /> */}
			{/* Children props  */}
			<RenderChildExample />
		</div>
	);
}

export default App;
