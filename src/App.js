import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

import MainSlider from './Components/MainSlider'
import Hamburger from './Components/Hamburger';
import Menu from './Components/Menu';
import Main from './Components/Main';

class App extends React.Component {

	state = {
		menuActive: false,
	}

	handleMenu = () => {
		this.setState({
			menuActive: !this.state.menuActive,
		});
	}

	render() {
		return (
			<div className="App">
				<BrowserRouter basename={process.env.PUBLIC_URL}>
					<Hamburger
						menuActive={this.state.menuActive}
						handleMenu={this.handleMenu}
					/>
					<Menu
						menuActive={this.state.menuActive}
						handleMenu={this.handleMenu}
					/>
					<MainSlider />
					<Main />
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
