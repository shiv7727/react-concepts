import React from 'react';
import RenderProps from './RenderProps';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';

function RenderExample() {
	return (
		<div>
			<h1>Render props Pattern </h1>
			<RenderProps
				render={(count, IncrementCounter) => (
					<ClickCounter count={count} IncrementCounter={IncrementCounter} />
				)}
			/>
			<RenderProps
				render={(count, IncrementCounter) => (
					<HoverCounter count={count} IncrementCounter={IncrementCounter} />
				)}
			/>
		</div>
	);
}
export default RenderExample;
