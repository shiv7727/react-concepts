import React, { Component } from 'react';

export default class Counter extends Component {
	constructor() {
		super();
		this.state = {
			count: 0,
		};
	}
	incrementCount = () => {
		this.setState({
			count: this.state.count + 1,
		});
	};
	render() {
		return (
			<div>
				<h1>Counter</h1>
				{this.props.render(this.state.count, this.incrementCount)}
			</div>
		);
	}
}
