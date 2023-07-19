import React, { Component } from 'react';

export default class ClickCounter extends Component {
	render() {
		return (
			<div>
				<button onClick={() => this.props.incrementCount()}>
					Click {this.props.count} times
				</button>
			</div>
		);
	}
}
