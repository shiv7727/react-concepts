import React, { Component } from 'react';

export default class HoverCounter extends Component {
	render() {
		return (
			<div>
				<button onMouseOver={() => this.props.incrementCount()}>
					Hover {this.props.count} times
				</button>
			</div>
		);
	}
}
