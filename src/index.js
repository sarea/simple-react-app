import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SomeComponent from './components/some_compoenent';


class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			somestate: "I am state",
		};
	}
	render() {

		return (
			<div>
				<SomeComponent />
				{this.state.somestate}
			</div>	
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));