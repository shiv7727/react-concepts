import React from 'react';
import ChildrenProps from './ChildrenProps';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';

export default function RenderChildExample() {
	return (
		<div>
			<h1>Render Child Pattern </h1>
			<ChildrenProps>
				{(count, IncrementCounter) => (
					<ClickCounter count={count} IncrementCounter={IncrementCounter} />
				)}
			</ChildrenProps>
			<ChildrenProps>
				{(count, IncrementCounter) => (
					<HoverCounter count={count} IncrementCounter={IncrementCounter} />
				)}
			</ChildrenProps>
		</div>
	);
}
